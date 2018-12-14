import { Inject, Injectable } from 'injection-js';
import { map, reduce } from 'rxjs/operators';
import { Post } from '../api';
import { EntitiesDao } from './entities-dao.service';
import { HttpService } from './http.service';
import { URL_BASE_TOKEN } from './injection-tokens';
import { StoreService } from './store.service';
import { EntityState } from '../common';

@Injectable()
export class PostsDao extends EntitiesDao<Post> {
  public readonly type = 'POSTS';
  public readonly endpoint = '/wp/v2/posts';
  public readonly reducer = reduce<Post, EntityState<Post>>(
    (acc, val) => ({
      dictionary: {
        ...acc.dictionary,
        [val._wp_id]: val,
      },
      index: {
        ...acc.index,
        [val.id]: val._wp_id,
      },
      set: [
        ...acc.set,
        val,
      ]
    }),
    {dictionary: {}, index: {}, set: []}
  );
  public readonly transducer = stream$ =>
    stream$.pipe(
      map(
        (post: any): Post => ({
          _wp_id: post.id,
          id: post.slug,
          title: post.title && post.title.rendered,
          excerpt: post.excerpt && post.excerpt.rendered,
          featured_media_id: post.featured_media,
          date: {
            created: post.date,
            modified: post.modified
          },
          categories: post.categories,
          tags: post.tags,
          author_id: post.author,
          content: post.content && post.content.rendered,
          acf: post.acf
        })
      )
    )

  constructor(
    http: HttpService,
    store: StoreService,
    @Inject(URL_BASE_TOKEN) urlBase
  ) {
    super(http, store, urlBase);
  }
}

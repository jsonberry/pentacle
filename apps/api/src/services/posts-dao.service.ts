import { Inject, Injectable } from 'injection-js';
import { map, reduce } from 'rxjs/operators';
import { EntitiesDao } from './entities-dao.service';
import { HttpService } from './http.service';
import { URL_BASE_TOKEN } from './injection-tokens';
import { StoreService } from './store.service';
import { EntityState } from '../common';
import { Post } from '@pentacle/models';

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
      set: [...acc.set, val],
    }),
    { dictionary: {}, index: {}, set: [] },
  );
  public readonly transducer = stream$ =>
    stream$.pipe(
      map(
        (post: any): Post => ({
          _wp_id: post && post.id,
          id: post && post.slug,
          title: post && post.title && post.title.rendered,
          excerpt: post && post.excerpt && post.excerpt.rendered,
          featured_media_id: post && post.featured_media,
          format: post && post.acf && post.acf.resource_format,
          source: post && post.acf && post.acf.source,
          date: {
            created: post && post.date,
            modified: post && post.modified,
          },
          categories: post && post.categories,
          tags: post && post.tags,
          difficulty: post && post.acf && post.acf.difficulty,
          bestOf: post && post.acf && post.acf.best_of,
          author_id: post && post.author,
          content: post && post.content && post.content.rendered,
          acf: post && post.acf,
        }),
      ),
    );

  constructor(
    http: HttpService,
    store: StoreService,
    @Inject(URL_BASE_TOKEN) urlBase,
  ) {
    super(http, store, urlBase);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { PostDTO } from '@pentacle/models';
import { css } from 'emotion';
import { rem } from '@pentacle/shared/util-style-framework';

@Component({
  selector: 'pentacle-resources-article',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a [routerLink]="article.id" [ngClass]="aStyles">
      <article [ngClass]="articleStyles">
        <section><div [ngClass]="divStyles"></div></section>
        <section>
          <h2 [innerHTML]="article.title" [ngClass]="h2Styles"></h2>
        </section>
      </article>
    </a>
  `,
})
export class ResourcesArticleComponent implements OnInit {
  @Input() article: PostDTO;
  divStyles: string;
  aStyles = css({
    backgroundColor: '#002538',
    border: '1px solid #002538',
    borderRadius: rem(4),
    display: 'block',
    marginBottom: rem(16),
    padding: rem(16),
    textDecoration: 'none',
    transition: 'all 250ms',
    h2: {
      color: '#fafafa',
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#fafafa',
      textDecoration: 'none',
      h2: {
        color: '#000000',
      },
    },
  });

  articleStyles = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  });

  h2Styles = css({
    maxWidth: rem(500),
  });

  ngOnInit() {
    this.divStyles = css({
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundImage: `url(${this.article.image.full})`,
      borderRadius: rem(4),
      height: rem(145),
      marginBottom: rem(16),
      width: rem(235),
    });
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PostDTO } from '@pentacle/models';
import { css } from 'emotion';
import { rem } from '@pentacle/shared/util-style-framework';

@Component({
  selector: 'pentacle-resources-article',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a [routerLink]="article?.id" [ngClass]="a">
      <article [ngClass]="articleClass">
        <section>
          <div
            [ngStyle]="{
              'background-image': 'url(' + article?.image?.full + ')'
            }"
            [ngClass]="div"
          ></div>
        </section>
        <section><h2 [innerHTML]="article?.title"></h2></section>
      </article>
    </a>
  `,
})
export class ResourcesArticleComponent {
  @Input() article: PostDTO;

  a = css({
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

  articleClass = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  });

  div = css({
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    borderRadius: rem(4),
    height: rem(145),
    marginBottom: rem(16),
    width: rem(235),
  });
}

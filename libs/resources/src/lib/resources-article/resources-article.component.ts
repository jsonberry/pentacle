import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PostDTO } from '@pentacle/models';

@Component({
  selector: 'pentacle-resources-article',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a [routerLink]="article.id" class="card clickable">
      <div class="card-header" [innerHtml]="article.title"></div>
      <div class="card-block">
        <div class="card-media-block">
          <img [src]="article?.image?.thumbnail" class="card-media-image" />
          <div class="card-media-description">
            <span class="card-media-title"
              ><strong>{{ article?.difficulty | titlecase }}</strong></span
            >
            <span class="card-media-text">
              {{ article?.format | uppercase }}
            </span>
          </div>
        </div>
        <div class="card-text">
          <span
            *ngFor="let topic of article.tags; index as i"
            class="badge"
            [ngClass]="'badge-' + (i + 1)"
            >{{ topic }}
          </span>
        </div>
      </div>
    </a>
  `,
})
export class ResourcesArticleComponent {
  @Input() article: PostDTO;
}

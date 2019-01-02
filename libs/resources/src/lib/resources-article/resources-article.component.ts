import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PostDTO } from '@pentacle/models';

@Component({
  selector: 'pentacle-resources-article',
  templateUrl: './resources-article.component.html',
  styleUrls: ['./resources-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesArticleComponent {
  @Input() article: PostDTO;
}

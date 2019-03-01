import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  ClrButtonModule,
  ClrModalModule,
  ClrTooltipModule,
} from '@clr/angular';
import { EffectsModule } from '@ngrx/effects';
import { ResourcesFilterModule } from '@pentacle/resources-filter';
import { SharedUtilBypassSecurityTrustHtmlModule } from '@pentacle/shared/util-bypass-security-trust-html';
import { SharedUtilCmsLinkModule } from '@pentacle/shared/util-cms-link';
import { SharedUtilDecodeHtmlEntitiesModule } from '@pentacle/shared/util-decode-html-entities';
import { ResourcesEffects } from './+state/resources.effects';
import { ResourcesArticleComponent } from './resources-article/resources-article.component';
import { ResourcesDetailComponent } from './resources-detail/resources-detail.component';
import { ResourcesComponent } from './resources/resources.component';
import { SharedUtilGhostsModule } from '@pentacle/shared/util-ghosts';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrModalModule,
    ClrButtonModule,
    ClrTooltipModule,
    ResourcesFilterModule,
    SharedUtilBypassSecurityTrustHtmlModule,
    SharedUtilCmsLinkModule,
    SharedUtilDecodeHtmlEntitiesModule,
    SharedUtilGhostsModule,
    EffectsModule.forFeature([ResourcesEffects]),
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: ':id',
            component: ResourcesDetailComponent,
          },
          {
            path: '',
            component: ResourcesComponent,
          },
        ],
      },
    ]),
  ],
  declarations: [
    ResourcesComponent,
    ResourcesDetailComponent,
    ResourcesArticleComponent,
  ],
})
export class ResourcesModule {}

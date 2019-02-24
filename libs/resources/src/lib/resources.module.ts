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
import { ResourcesEffects } from './+state/resources.effects';
import { ResourcesArticleComponent } from './resources-article/resources-article.component';
import { ResourcesDetailComponent } from './resources-detail/resources-detail.component';
import { ResourcesComponent } from './resources/resources.component';
import { SharedUtilDecodeHtmlEntitiesModule } from '@pentacle/shared/util-decode-html-entities';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrModalModule,
    ClrButtonModule,
    ClrTooltipModule,
    ResourcesFilterModule,
    SharedUtilBypassSecurityTrustHtmlModule,
    SharedUtilDecodeHtmlEntitiesModule,
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

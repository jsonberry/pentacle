import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ResourcesEffects } from './+state/resources.effects';
import { ResourcesDetailComponent } from './resources-detail/resources-detail.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourcesArticleComponent } from './resources-article/resources-article.component';
import {
  ClrModalModule,
  ClrButtonModule,
  ClrCheckboxModule,
} from '@clr/angular';
import { ResourcesFilterModule } from '@pentacle/resources-filter';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrModalModule,
    ClrButtonModule,
    ResourcesFilterModule,
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

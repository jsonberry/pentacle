import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { EffectsModule } from '@ngrx/effects';
import { ResourcesEffects } from './+state/resources.effects';
import { ResourcesDetailComponent } from './resources-detail/resources-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: 'read',
            component: ResourcesComponent,
          },
          {
            path: 'watch',
            component: ResourcesComponent,
          },
          {
            path: 'listen',
            component: ResourcesComponent,
          },
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
    EffectsModule.forFeature([ResourcesEffects]),
  ],
  declarations: [ResourcesComponent, ResourcesDetailComponent],
})
export class ResourcesModule {}

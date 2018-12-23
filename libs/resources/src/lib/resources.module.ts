import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ResourcesEffects } from './+state/resources.effects';
import { ResourcesDetailComponent } from './resources-detail/resources-detail.component';
import { ResourcesFilterContainerComponent } from './resources-filter-container/resources-filter-container.component';
import { ResourcesFilterComponent } from './resources-filter/resources-filter.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
    EffectsModule.forFeature([ResourcesEffects]),
  ],
  declarations: [
    ResourcesComponent,
    ResourcesDetailComponent,
    ResourcesFilterContainerComponent,
    ResourcesFilterComponent,
  ],
})
export class ResourcesModule {}

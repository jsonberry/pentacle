import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ResourcesFilterEffects } from './+state/resources-filter.effects';
import { ResourcesFilterContainerComponent } from './resources-filter-container/resources-filter-container.component';
import { ResourcesFilterComponent } from './resources-filter/resources-filter.component';
import { ResourcesFilterDifficultiesSortPipe } from './resources-filter/resources-filter-difficulties-sort.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ResourcesFilterEffects]),
  ],
  exports: [ResourcesFilterContainerComponent],
  declarations: [
    ResourcesFilterComponent,
    ResourcesFilterContainerComponent,
    ResourcesFilterDifficultiesSortPipe,
  ],
})
export class ResourcesFilterModule {}

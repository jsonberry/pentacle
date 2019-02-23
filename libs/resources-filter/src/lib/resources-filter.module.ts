import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ClrCheckboxModule,
  ClrSignpostModule,
  ClrModalModule,
  ClrButtonModule,
} from '@clr/angular';
import { EffectsModule } from '@ngrx/effects';
import { ResourcesFilterEffects } from './+state/resources-filter.effects';
import { ResourcesFilterContainerComponent } from './resources-filter-container/resources-filter-container.component';
import { ResourcesFilterDifficultiesSortPipe } from './resources-filter/resources-filter-difficulties-sort.pipe';
import { ResourcesFilterComponent } from './resources-filter/resources-filter.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrCheckboxModule,
    ClrSignpostModule,
    ClrModalModule,
    ClrButtonModule,
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

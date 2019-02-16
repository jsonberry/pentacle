import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PagesEffects } from './+state/pages.effects';
import { pagesReducer, PAGES_FEATURE_KEY } from './+state/pages.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(PAGES_FEATURE_KEY, pagesReducer),
    EffectsModule.forFeature([PagesEffects]),
  ],
})
export class PagesStateModule {}

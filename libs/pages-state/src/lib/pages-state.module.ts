import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PagesEffects } from './+state/pages.effects';
import {
  PAGES_FEATURE_KEY,
  initialState as pagesInitialState,
  pagesReducer,
} from './+state/pages.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(PAGES_FEATURE_KEY, pagesReducer, {
      initialState: pagesInitialState,
    }),
    EffectsModule.forFeature([PagesEffects]),
  ],
})
export class PagesStateModule {}

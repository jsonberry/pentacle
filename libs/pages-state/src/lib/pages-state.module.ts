import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  PAGES_FEATURE_KEY,
  initialState as pagesInitialState,
  pagesReducer,
} from './+state/pages.reducer';
import { PagesEffects } from './+state/pages.effects';

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

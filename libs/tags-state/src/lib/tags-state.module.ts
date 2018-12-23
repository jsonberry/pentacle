import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  initialState as tagsInitialState,
  tagsReducer,
  TAGS_FEATURE_KEY,
} from './+state/tags.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TAGS_FEATURE_KEY, tagsReducer, {
      initialState: tagsInitialState,
    }),
  ],
})
export class TagsStateModule {}

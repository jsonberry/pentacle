import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TagsEffects } from './+state/tags.effects';
import { tagsReducer, TAGS_FEATURE_KEY } from './+state/tags.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TAGS_FEATURE_KEY, tagsReducer),
    EffectsModule.forFeature([TagsEffects]),
  ],
})
export class TagsStateModule {}

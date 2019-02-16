import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostsEffects } from './+state/posts.effects';
import { postsReducer, POSTS_FEATURE_KEY } from './+state/posts.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(POSTS_FEATURE_KEY, postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
})
export class PostsStateModule {}

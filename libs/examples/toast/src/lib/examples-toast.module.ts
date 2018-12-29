import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './toast/toast.component';
import { StoreModule } from '@ngrx/store';
import { toastReducer, initialState } from './toast/+state/toast.reducer';
import { TOAST_FEATURE_KEY } from '@pentacle/models';
import { EffectsModule } from '@ngrx/effects';
import { ToastEffects } from './toast/+state/toast.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TOAST_FEATURE_KEY, toastReducer, {
      initialState,
    }),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ToastComponent },
    ]),
    EffectsModule.forFeature([ToastEffects]),
  ],
  declarations: [ToastComponent],
})
export class ExamplesToastModule {}

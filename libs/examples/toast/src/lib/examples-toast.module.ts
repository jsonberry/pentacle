import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './toast/toast.component';
import { StoreModule } from '@ngrx/store';
import { toastReducer, initialState } from './toast/+state/toast.reducer';
import { TOAST_FEATURE_KEY } from '@pentacle/models';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TOAST_FEATURE_KEY, toastReducer, {
      initialState,
    }),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ToastComponent },
    ]),
  ],
  declarations: [ToastComponent],
})
export class ExamplesToastModule {}

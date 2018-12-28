import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ToastComponent },
    ]),
  ],
  declarations: [ToastComponent],
})
export class ExamplesToastModule {}

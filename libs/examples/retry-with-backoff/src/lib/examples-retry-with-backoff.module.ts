import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RetryWithBackoffComponent } from './retry-with-backoff/retry-with-backoff.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: RetryWithBackoffComponent },
    ]),
  ],
  declarations: [RetryWithBackoffComponent],
})
export class ExamplesRetryWithBackoffModule {}

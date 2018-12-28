import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExamplesListComponent } from './examples-list/examples-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExamplesListComponent,
      },
      {
        path: 'examples-retry-with-backoff',
        loadChildren:
          '@pentacle/examples/retry-with-backoff#ExamplesRetryWithBackoffModule',
      },
      {
        path: 'examples-toast',
        loadChildren: '@pentacle/examples/toast#ExamplesToastModule',
      },
    ]),
  ],
  declarations: [ExamplesListComponent],
})
export class ExamplesRootModule {}

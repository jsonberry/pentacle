import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpertiseComponent } from './expertise/expertise.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ExpertiseComponent },
    ]),
  ],
  declarations: [ExpertiseComponent],
})
export class ExpertiseModule {}

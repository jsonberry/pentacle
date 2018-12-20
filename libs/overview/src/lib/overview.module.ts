import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { OverviewEffects } from './overview.effects';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: OverviewComponent },
    ]),
    EffectsModule.forFeature([OverviewEffects]),
  ],
  declarations: [OverviewComponent],
})
export class OverviewModule {}

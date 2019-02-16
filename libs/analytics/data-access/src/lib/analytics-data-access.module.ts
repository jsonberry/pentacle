import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AnalyticsEffects } from './+state/analytics.effects';

@NgModule({
  imports: [EffectsModule.forFeature([AnalyticsEffects])],
})
export class AnalyticsDataAccessModule {}

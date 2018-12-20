import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { LayersEffects } from './+state/layers.effects';
import { LayersComponent } from './layers/layers.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: LayersComponent,
      },
      {
        path: '',
        component: LayersComponent,
      },
    ]),
    EffectsModule.forFeature([LayersEffects]),
  ],
  declarations: [LayersComponent],
})
export class LayersModule {}

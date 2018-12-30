import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { PrinciplesEffects } from './+state/principles.effects';
import { PrinciplesComponent } from './principles/principles.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: PrinciplesComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
      },
    ]),
    EffectsModule.forFeature([PrinciplesEffects]),
  ],
  declarations: [PrinciplesComponent],
})
export class PrinciplesModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ModulesEffects } from './+state/modules.effects';
import { ModulesComponent } from './modules/modules.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: ModulesComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/overview',
      },
    ]),
    EffectsModule.forFeature([ModulesEffects]),
  ],
  declarations: [ModulesComponent],
})
export class ModulesModule {}

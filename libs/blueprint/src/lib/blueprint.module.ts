import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { BlueprintEffects } from './+state/blueprint.effects';
import { BlueprintComponent } from './blueprint/blueprint.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: BlueprintComponent },
    ]),
    EffectsModule.forFeature([BlueprintEffects]),
  ],
  declarations: [BlueprintComponent],
})
export class BlueprintModule {}

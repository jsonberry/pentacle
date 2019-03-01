import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhostImageDirective } from './ghost-image.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [GhostImageDirective],
  exports: [GhostImageDirective],
})
export class SharedUtilGhostsModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsLinkDirective } from './cms-link.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CmsLinkDirective],
  exports: [CmsLinkDirective],
})
export class SharedUtilCmsLinkModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BypassSecurityTrustHtmlPipe } from './bypass-security-trust-html.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [BypassSecurityTrustHtmlPipe],
  exports: [BypassSecurityTrustHtmlPipe],
})
export class SharedUtilBypassSecurityTrustHtmlModule {}

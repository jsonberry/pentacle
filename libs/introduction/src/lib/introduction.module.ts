import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SharedUtilCmsLinkModule } from '@pentacle/shared/util-cms-link';
import { SharedUtilBypassSecurityTrustHtmlModule } from '@pentacle/shared/util-bypass-security-trust-html';
import { IntroductionEffects } from './+state/introduction.effects';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUtilCmsLinkModule,
    SharedUtilBypassSecurityTrustHtmlModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: IntroductionComponent },
    ]),
    EffectsModule.forFeature([IntroductionEffects]),
  ],
  declarations: [IntroductionComponent],
})
export class IntroductionModule {}

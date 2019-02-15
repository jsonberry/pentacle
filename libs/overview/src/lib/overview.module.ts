import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SharedUtilBypassSecurityTrustHtmlModule } from '@pentacle/shared/util-bypass-security-trust-html';
import { SharedUtilCmsLinkModule } from '@pentacle/shared/util-cms-link';
import { OverviewEffects } from './+state/overview.effects';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUtilCmsLinkModule,
    SharedUtilBypassSecurityTrustHtmlModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: OverviewComponent },
    ]),
    EffectsModule.forFeature([OverviewEffects]),
  ],
  declarations: [OverviewComponent],
})
export class OverviewModule {}

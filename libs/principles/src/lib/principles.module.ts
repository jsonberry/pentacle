import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SharedUtilBypassSecurityTrustHtmlModule } from '@pentacle/shared/util-bypass-security-trust-html';
import { SharedUtilCmsLinkModule } from '@pentacle/shared/util-cms-link';
import { PrinciplesEffects } from './+state/principles.effects';
import { PrinciplesComponent } from './principles/principles.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUtilCmsLinkModule,
    SharedUtilBypassSecurityTrustHtmlModule,
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

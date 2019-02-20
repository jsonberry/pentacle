import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SharedUtilBypassSecurityTrustHtmlModule } from '@pentacle/shared/util-bypass-security-trust-html';
import { SharedUtilCmsLinkModule } from '@pentacle/shared/util-cms-link';
import { HomeEffects } from './+state/home.effects';
import { HomeComponent } from './home/home.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedUtilBypassSecurityTrustHtmlModule,
    SharedUtilCmsLinkModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
    EffectsModule.forFeature([HomeEffects]),
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './+state/home.effects';
import { HomeComponent } from './home/home.component';
import { PagesStateModule } from '@pentacle/pages-state';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PagesStateModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
    EffectsModule.forFeature([HomeEffects]),
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}

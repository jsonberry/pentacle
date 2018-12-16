import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}

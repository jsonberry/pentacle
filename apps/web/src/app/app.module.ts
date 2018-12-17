import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [{ path: '', loadChildren: '@pentacle/home#HomeModule' }],
      { initialNavigation: 'enabled' },
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

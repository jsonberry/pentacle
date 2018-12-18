import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, META_REDUCERS, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { RouterState, RouterStateModule } from '@pentacle/router-state';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

export interface State {
  router: RouterState;
}
export const getMetaReducers = (): MetaReducer<State>[] =>
  !environment.production ? [storeFreeze] : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', loadChildren: '@pentacle/home#HomeModule' },
        { path: '**', loadChildren: '@pentacle/not-found#NotFoundModule' },
      ],
      { initialNavigation: 'enabled' },
    ),
    RouterStateModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    NxModule.forRoot(),
  ],
  providers: [
    {
      provide: META_REDUCERS,
      useFactory: getMetaReducers,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

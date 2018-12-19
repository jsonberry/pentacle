import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { RouterStateModule } from '@pentacle/router-state';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { storeDevToolsConfig } from './store-dev-tool-config';
import { PagesStateModule } from '@pentacle/pages-state';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>,
): ActionReducer<any> {
  return localStorageSync({
    keys: ['pages'],
    rehydrate: true,
    storage: sessionStorage,
  })(reducer);
}

export const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          loadChildren: '@pentacle/home#HomeModule',
        },
        {
          path: 'introduction',
          pathMatch: 'full',
          loadChildren: '@pentacle/introduction#IntroductionModule',
        },
        { path: '**', loadChildren: '@pentacle/not-found#NotFoundModule' },
      ],
      { initialNavigation: 'enabled' },
    ),
    RouterStateModule,
    PagesStateModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, { metaReducers }),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument(storeDevToolsConfig),
    NxModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

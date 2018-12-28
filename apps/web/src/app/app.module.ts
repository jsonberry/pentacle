import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { PagesStateModule } from '@pentacle/pages-state';
import { PostsStateModule } from '@pentacle/posts-state';
import { RouterStateModule } from '@pentacle/router-state';
import { TagsStateModule } from '@pentacle/tags-state';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { storeDevToolsConfig } from './store-dev-tool-config';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>,
): ActionReducer<any> {
  return localStorageSync({
    keys: ['pages', 'posts'],
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
    BrowserAnimationsModule,
    MatSidenavModule,
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
        {
          path: 'overview',
          pathMatch: 'full',
          loadChildren: '@pentacle/overview#OverviewModule',
        },
        {
          path: 'layers',
          loadChildren: '@pentacle/layers#LayersModule',
        },
        {
          path: 'resources',
          loadChildren: '@pentacle/resources#ResourcesModule',
        },
        {
          path: 'examples',
          loadChildren: '@pentacle/examples/root#ExamplesRootModule',
        },
        { path: '**', loadChildren: '@pentacle/not-found#NotFoundModule' },
      ],
      { initialNavigation: 'enabled' },
    ),
    RouterStateModule,
    PostsStateModule,
    PagesStateModule,
    TagsStateModule,
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

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { AnalyticsDataAccessModule } from '@pentacle/analytics/data-access';
import { PagesLoadingProgressModule } from '@pentacle/pages-loading-progress';
import { PagesStateModule } from '@pentacle/pages-state';
import { PostsStateModule } from '@pentacle/posts-state';
import { ResourcesFilterModule } from '@pentacle/resources-filter';
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
    keys: ['pages', 'posts', 'tags'],
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
          path: 'modules',
          loadChildren: '@pentacle/modules#ModulesModule',
        },
        {
          path: 'resources',
          loadChildren: '@pentacle/resources#ResourcesModule',
        },
        {
          path: 'examples',
          loadChildren: '@pentacle/examples/root#ExamplesRootModule',
        },
        {
          path: 'blueprint',
          loadChildren: '@pentacle/blueprint#BlueprintModule',
        },
        {
          path: 'principles',
          loadChildren: '@pentacle/principles#PrinciplesModule',
        },
        { path: '**', loadChildren: '@pentacle/not-found#NotFoundModule' },
      ],
      {
        initialNavigation: 'enabled',
        scrollPositionRestoration: 'disabled',
      },
    ),
    PagesLoadingProgressModule,
    ResourcesFilterModule,
    RouterStateModule,
    PostsStateModule,
    PagesStateModule,
    TagsStateModule,
    AnalyticsDataAccessModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, { metaReducers }),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument(storeDevToolsConfig),
    NxModule.forRoot(),
    ClarityModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

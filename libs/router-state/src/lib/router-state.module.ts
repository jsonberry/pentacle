import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { CustomSerializer } from './+state/router-state-serializer';
import { RouterEffects } from './+state/router.effects';
import { ROUTER_FEATURE_KEY, reducer } from './+state/router.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(ROUTER_FEATURE_KEY, reducer),
    EffectsModule.forFeature([RouterEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }], // this is the ngrx-router-store v6 version, this changes in v7, but it's in beta so not upgrading for now
})
export class RouterStateModule {}

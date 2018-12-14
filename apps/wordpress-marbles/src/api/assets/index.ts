import { combineRoutes, EffectFactory } from '@marblejs/core';
import {
  getAssetsEffect$,
  getAssetEffect$,
  postFlushAssetsCacheEffect$
} from './effects';
export * from './assets.model';

export const flushAssetsCache$ = EffectFactory.matchPath('/flush')
  .matchType('POST')
  .use(postFlushAssetsCacheEffect$);

export const getAsset$ = EffectFactory.matchPath('/:id')
  .matchType('GET')
  .use(getAssetEffect$);

export const getAssets$ = EffectFactory.matchPath('/')
  .matchType('GET')
  .use(getAssetsEffect$);

export const assets$ = combineRoutes('/assets', {
  effects: [flushAssetsCache$, getAsset$, getAssets$]
});

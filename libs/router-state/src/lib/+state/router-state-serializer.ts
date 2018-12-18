import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateUrl } from './router.reducer';

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    return {
      url,
      params,
      queryParams,
      // The root is included here so that the DataPersistence.navigation helper from Nx can work properly
      // By it's recursive nature, this traditionally would crash StoreDevToolsModule
      // There's a custom replacer in the StoreDevToolsModule instrument configuration that strips this out of the DevTools
      // https://github.com/nrwl/nx/issues/191#issuecomment-448312694
      root: routerState.root,
    };
  }
}

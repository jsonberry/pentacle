import { Router } from '@angular/router';

export const storeDevToolsConfig = {
  maxAge: 25,
  // https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#serialize
  serialize: {
    options: {
      undefined: true, // same as serialilze: undefined,
    },
    replacer: (key, value) => {
      if (value instanceof Router) {
        return undefined;
      }

      if (
        key === 'router' &&
        typeof value !== 'undefined' &&
        typeof value !== 'function'
      ) {
        return {
          url: value.state.url,
          params: value.state.params,
          queryParams: value.state.queryParams,
        };
      }

      return value;
    },
  },
};

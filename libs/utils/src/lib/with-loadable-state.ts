import { Action, ActionReducer } from '@ngrx/store';

export function withLoadingToggle<
  S extends { loading: boolean },
  A extends Action
>(baseReducer: ActionReducer<S, A>, triggers: string[]) {
  return (state: S, action: A) =>
    baseReducer(
      triggers.includes(action.type)
        ? {
            // this type assertion can be removed after the project is on TypeScript 3.2.2+
            // has to do with spreading a generic
            ...(state as any),
            loading: !state.loading,
          }
        : state,
      action,
    );
}

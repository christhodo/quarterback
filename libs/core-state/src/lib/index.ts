import { Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as fromQuarterbacks from './quarterbacks/quarterbacks.reducer';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// ---------------------------------------
// Core State and Reducers
// ---------------------------------------

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  [fromQuarterbacks.QUARTERBACKS_FEATURE_KEY]: fromQuarterbacks.QuarterbacksState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [fromQuarterbacks.QUARTERBACKS_FEATURE_KEY]:
    fromQuarterbacks.quarterbacksReducer,
};

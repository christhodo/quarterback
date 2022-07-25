import { Quarterback } from '@quarterback-angular/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as QuarterbacksActions from './quarterbacks.actions';

export const QUARTERBACKS_FEATURE_KEY = 'quarterbacks';

export interface QuarterbacksState extends EntityState<Quarterback> {
  selectedId?: string | number; // which quarterbacks record has been selected
  loaded: boolean; // has the quarterbacks list been loaded
  error?: string | null; // last known error (if any)
}

export interface QuarterbacksPartialState {
  readonly [QUARTERBACKS_FEATURE_KEY]: QuarterbacksState;
}

export const quarterbacksAdapter: EntityAdapter<Quarterback> = createEntityAdapter();

export const initialQuarterbacksState: QuarterbacksState = quarterbacksAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _quarterbacksReducer = createReducer(
  initialQuarterbacksState,
  on(QuarterbacksActions.selectQuarterback, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(QuarterbacksActions.resetSelectedQuarterback, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(QuarterbacksActions.resetQuarterbacks, (state) =>
    quarterbacksAdapter.removeAll(state)
  ),
  // Load quarterbacks
  on(QuarterbacksActions.loadQuarterbacks, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(QuarterbacksActions.loadQuarterbacksSuccess, (state, { quarterbacks }) =>
    quarterbacksAdapter.setAll(quarterbacks, { ...state, loaded: true })
  ),
  on(QuarterbacksActions.loadQuarterbacksFailure, onFailure),
  // Load quarterback
  on(QuarterbacksActions.loadQuarterback, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(QuarterbacksActions.loadQuarterbackSuccess, (state, { quarterback }) =>
    quarterbacksAdapter.upsertOne(quarterback, { ...state, loaded: true })
  ),
  on(QuarterbacksActions.loadQuarterbackFailure, onFailure),
  // Add quarterback
  on(QuarterbacksActions.createQuarterbackSuccess, (state, { quarterback }) =>
    quarterbacksAdapter.addOne(quarterback, state)
  ),
  on(QuarterbacksActions.createQuarterbackFailure, onFailure),
  // Update quarterback
  on(QuarterbacksActions.updateQuarterbackSuccess, (state, { quarterback }) =>
    quarterbacksAdapter.updateOne(
      { id: quarterback.id, changes: quarterback },
      state
    )
  ),
  on(QuarterbacksActions.updateQuarterbackFailure, onFailure),
  // Delete quarterback
  on(QuarterbacksActions.deleteQuarterbackSuccess, (state, { quarterback }) =>
    quarterbacksAdapter.removeOne(quarterback.id, state)
  ),
  on(QuarterbacksActions.deleteQuarterbackFailure, onFailure)
);

export function quarterbacksReducer(
  state: QuarterbacksState | undefined,
  action: Action
) {
  return _quarterbacksReducer(state, action);
}

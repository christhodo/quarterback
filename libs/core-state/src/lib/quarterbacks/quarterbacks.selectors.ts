import { Quarterback } from '@quarterback-angular/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  quarterbacksAdapter,
  QuarterbacksState,
  QUARTERBACKS_FEATURE_KEY,
} from './quarterbacks.reducer';

// Lookup the 'Quarterbacks' feature state managed by NgRx
export const getQuarterbacksState = createFeatureSelector<QuarterbacksState>(
  QUARTERBACKS_FEATURE_KEY
);

const { selectAll, selectEntities } = quarterbacksAdapter.getSelectors();

export const getQuarterbacksLoaded = createSelector(
  getQuarterbacksState,
  (state: QuarterbacksState) => state.loaded
);

export const getQuarterbacksError = createSelector(
  getQuarterbacksState,
  (state: QuarterbacksState) => state.error
);

export const getAllQuarterbacks = createSelector(
  getQuarterbacksState,
  (state: QuarterbacksState) => selectAll(state)
);

export const getQuarterbacksEntities = createSelector(
  getQuarterbacksState,
  (state: QuarterbacksState) => selectEntities(state)
);

export const getSelectedQuarterbackId = createSelector(
  getQuarterbacksState,
  (state: QuarterbacksState) => state.selectedId
);

const emptyQuarterback: Quarterback = {
  id: null,
  title: '',
  description: '',
};

export const getSelectedQuarterback = createSelector(
  getQuarterbacksEntities,
  getSelectedQuarterbackId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : emptyQuarterback;
  }
);

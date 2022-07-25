import { Quarterback } from '@quarterback-angular/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const resetSelectedQuarterback = createAction(
  '[Quarterbacks] Reset Selected Quarterback'
);
export const resetQuarterbacks = createAction(
  '[Quarterbacks] Reset Quarterbacks'
);

// Select Quarterback
export const selectQuarterback = createAction(
  '[Quarterbacks] Select Quarterback',
  props<{ selectedId: string }>()
);

// Load Quarterbacks
export const loadQuarterbacks = createAction(
  '[Quarterbacks] Load Quarterbacks'
);

export const loadQuarterbacksSuccess = createAction(
  '[Quarterbacks] Load Quarterbacks Success',
  props<{ quarterbacks: Quarterback[] }>()
);

export const loadQuarterbacksFailure = createAction(
  '[Quarterbacks] Load Quarterbacks Failure',
  props<{ error: any }>()
);

// Load Quarterback
export const loadQuarterback = createAction(
  '[Quarterbacks] Load Quarterback',
  props<{ quarterbackId: string }>()
);

export const loadQuarterbackSuccess = createAction(
  '[Quarterbacks] Load Quarterback Success',
  props<{ quarterback: Quarterback }>()
);

export const loadQuarterbackFailure = createAction(
  '[Quarterbacks] Load Quarterback Failure',
  props<{ error: any }>()
);

// Create Quarterback
export const createQuarterback = createAction(
  '[Quarterbacks] Create Quarterback',
  props<{ quarterback: Quarterback }>()
);

export const createQuarterbackSuccess = createAction(
  '[Quarterbacks] Create Quarterback Success',
  props<{ quarterback: Quarterback }>()
);

export const createQuarterbackFailure = createAction(
  '[Quarterbacks] Create Quarterback Failure',
  props<{ error: any }>()
);

// Update Quarterback
export const updateQuarterback = createAction(
  '[Quarterbacks] Update Quarterback',
  props<{ quarterback: Quarterback }>()
);

export const updateQuarterbackSuccess = createAction(
  '[Quarterbacks] Update Quarterback Success',
  props<{ quarterback: Quarterback }>()
);

export const updateQuarterbackFailure = createAction(
  '[Quarterbacks] Update Quarterback Failure',
  props<{ error: any }>()
);

// Delete Quarterback
export const deleteQuarterback = createAction(
  '[Quarterbacks] Delete Quarterback',
  props<{ quarterback: Quarterback }>()
);

export const deleteQuarterbackCancelled = createAction(
  '[Quarterbacks] Delete Quarterback Cancelled'
);

export const deleteQuarterbackSuccess = createAction(
  '[Quarterbacks] Delete Quarterback Success',
  props<{ quarterback: Quarterback }>()
);

export const deleteQuarterbackFailure = createAction(
  '[Quarterbacks] Delete Quarterback Failure',
  props<{ error: any }>()
);

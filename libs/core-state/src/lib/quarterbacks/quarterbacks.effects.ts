import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as fromQuarterbacks from './quarterbacks.reducer';
import * as QuarterbacksActions from './quarterbacks.actions';
import { Quarterback } from '@quarterback-angular/api-interfaces';
import { QuarterbacksService } from '@quarterback-angular/core-data';

@Injectable()
export class QuarterbacksEffects {
  loadQuarterbacks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuarterbacksActions.loadQuarterbacks),
      fetch({
        run: (action) =>
          this.quarterbacksService
            .all()
            .pipe(
              map((quarterbacks: Quarterback[]) =>
                QuarterbacksActions.loadQuarterbacksSuccess({ quarterbacks })
              )
            ),
        onError: (action, error) =>
          QuarterbacksActions.loadQuarterbacksFailure({ error }),
      })
    )
  );

  loadQuarterback$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuarterbacksActions.loadQuarterback),
      fetch({
        run: (action) =>
          this.quarterbacksService
            .find(action.quarterbackId)
            .pipe(
              map((quarterback: Quarterback) =>
                QuarterbacksActions.loadQuarterbackSuccess({ quarterback })
              )
            ),
        onError: (action, error) =>
          QuarterbacksActions.loadQuarterbackFailure({ error }),
      })
    )
  );

  createQuarterback$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuarterbacksActions.createQuarterback),
      pessimisticUpdate({
        run: (action) =>
          this.quarterbacksService
            .create(action.quarterback)
            .pipe(
              map((quarterback: Quarterback) =>
                QuarterbacksActions.createQuarterbackSuccess({ quarterback })
              )
            ),
        onError: (action, error) =>
          QuarterbacksActions.createQuarterbackFailure({ error }),
      })
    )
  );

  updateQuarterback$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuarterbacksActions.updateQuarterback),
      pessimisticUpdate({
        run: (action) =>
          this.quarterbacksService
            .update(action.quarterback)
            .pipe(
              map((quarterback: Quarterback) =>
                QuarterbacksActions.updateQuarterbackSuccess({ quarterback })
              )
            ),
        onError: (action, error) =>
          QuarterbacksActions.updateQuarterbackFailure({ error }),
      })
    )
  );

  deleteQuarterback$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuarterbacksActions.deleteQuarterback),
      pessimisticUpdate({
        run: (action) =>
          this.quarterbacksService
            .delete(action.quarterback)
            .pipe(
              map((quarterback: Quarterback) =>
                QuarterbacksActions.deleteQuarterbackSuccess({ quarterback })
              )
            ),
        onError: (action, error) =>
          QuarterbacksActions.deleteQuarterbackFailure({ error }),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private quarterbacksService: QuarterbacksService
  ) {}
}

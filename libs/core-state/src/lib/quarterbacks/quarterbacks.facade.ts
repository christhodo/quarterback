import { Injectable } from '@angular/core';
import { Quarterback } from '@quarterback-angular/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as QuarterbacksActions from './quarterbacks.actions';
import * as QuarterbacksSelectors from './quarterbacks.selectors';

@Injectable()
export class QuarterbacksFacade {
  loaded$ = this.store.pipe(
    select(QuarterbacksSelectors.getQuarterbacksLoaded)
  );
  allQuarterbacks$ = this.store.pipe(
    select(QuarterbacksSelectors.getAllQuarterbacks)
  );
  selectedQuarterback$ = this.store.pipe(
    select(QuarterbacksSelectors.getSelectedQuarterback)
  );

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === QuarterbacksActions.createQuarterback({} as any).type ||
        action.type === QuarterbacksActions.updateQuarterback({} as any).type ||
        action.type === QuarterbacksActions.deleteQuarterback({} as any).type
    )
  );

  constructor(private store: Store, private actions$: ActionsSubject) {}

  selectQuarterback(selectedId: string) {
    this.dispatch(QuarterbacksActions.selectQuarterback({ selectedId }));
  }

  loadQuarterbacks() {
    this.dispatch(QuarterbacksActions.loadQuarterbacks());
  }

  loadQuarterback(quarterbackId: string) {
    this.dispatch(QuarterbacksActions.loadQuarterback({ quarterbackId }));
  }

  saveQuarterback(quarterback: Quarterback) {
    if (quarterback.id) {
      this.updateQuarterback(quarterback);
    } else {
      this.createQuarterback(quarterback);
    }
  }

  createQuarterback(quarterback: Quarterback) {
    this.dispatch(QuarterbacksActions.createQuarterback({ quarterback }));
  }

  updateQuarterback(quarterback: Quarterback) {
    this.dispatch(QuarterbacksActions.updateQuarterback({ quarterback }));
  }

  deleteQuarterback(quarterback: Quarterback) {
    this.dispatch(QuarterbacksActions.deleteQuarterback({ quarterback }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

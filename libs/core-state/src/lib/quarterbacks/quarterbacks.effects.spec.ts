import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { QuarterbacksEffects } from './quarterbacks.effects';
import * as QuarterbacksActions from './quarterbacks.actions';

describe('QuarterbacksEffects', () => {
  let actions: Observable<any>;
  let effects: QuarterbacksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        QuarterbacksEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(QuarterbacksEffects);
  });

  describe('loadQuarterbacks$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: QuarterbacksActions.loadQuarterbacks() });

      const expected = hot('-a-|', {
        a: QuarterbacksActions.loadQuarterbacksSuccess({ quarterbacks: [] }),
      });

      expect(effects.loadQuarterbacks$).toBeObservable(expected);
    });
  });
});

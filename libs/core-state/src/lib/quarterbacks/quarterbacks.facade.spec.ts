import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { QuarterbacksEntity } from './quarterbacks.models';
import { QuarterbacksEffects } from './quarterbacks.effects';
import { QuarterbacksFacade } from './quarterbacks.facade';

import * as QuarterbacksSelectors from './quarterbacks.selectors';
import * as QuarterbacksActions from './quarterbacks.actions';
import {
  QUARTERBACKS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './quarterbacks.reducer';

interface TestSchema {
  quarterbacks: State;
}

describe('QuarterbacksFacade', () => {
  let facade: QuarterbacksFacade;
  let store: Store<TestSchema>;
  const createQuarterbacksEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as QuarterbacksEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(QUARTERBACKS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([QuarterbacksEffects]),
        ],
        providers: [QuarterbacksFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(QuarterbacksFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allQuarterbacks$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(QuarterbacksActions.loadQuarterbacks());

        list = await readFirst(facade.allQuarterbacks$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadQuarterbacksSuccess` to manually update list
     */
    it('allQuarterbacks$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allQuarterbacks$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          QuarterbacksActions.loadQuarterbacksSuccess({
            quarterbacks: [
              createQuarterbacksEntity('AAA'),
              createQuarterbacksEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allQuarterbacks$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});

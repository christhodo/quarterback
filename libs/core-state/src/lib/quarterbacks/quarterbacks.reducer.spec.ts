import { QuarterbacksEntity } from './quarterbacks.models';
import * as QuarterbacksActions from './quarterbacks.actions';
import { State, initialState, reducer } from './quarterbacks.reducer';

describe('Quarterbacks Reducer', () => {
  const createQuarterbacksEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as QuarterbacksEntity);

  beforeEach(() => {});

  describe('valid Quarterbacks actions', () => {
    it('loadQuarterbacksSuccess should return set the list of known Quarterbacks', () => {
      const quarterbacks = [
        createQuarterbacksEntity('PRODUCT-AAA'),
        createQuarterbacksEntity('PRODUCT-zzz'),
      ];
      const action = QuarterbacksActions.loadQuarterbacksSuccess({
        quarterbacks,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

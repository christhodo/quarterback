import { QuarterbacksEntity } from './quarterbacks.models';
import {
  State,
  quarterbacksAdapter,
  initialState,
} from './quarterbacks.reducer';
import * as QuarterbacksSelectors from './quarterbacks.selectors';

describe('Quarterbacks Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getQuarterbacksId = (it) => it['id'];
  const createQuarterbacksEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as QuarterbacksEntity);

  let state;

  beforeEach(() => {
    state = {
      quarterbacks: quarterbacksAdapter.setAll(
        [
          createQuarterbacksEntity('PRODUCT-AAA'),
          createQuarterbacksEntity('PRODUCT-BBB'),
          createQuarterbacksEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Quarterbacks Selectors', () => {
    it('getAllQuarterbacks() should return the list of Quarterbacks', () => {
      const results = QuarterbacksSelectors.getAllQuarterbacks(state);
      const selId = getQuarterbacksId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = QuarterbacksSelectors.getSelected(state);
      const selId = getQuarterbacksId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getQuarterbacksLoaded() should return the current 'loaded' status", () => {
      const result = QuarterbacksSelectors.getQuarterbacksLoaded(state);

      expect(result).toBe(true);
    });

    it("getQuarterbacksError() should return the current 'error' state", () => {
      const result = QuarterbacksSelectors.getQuarterbacksError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

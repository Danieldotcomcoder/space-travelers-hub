import dragonsReducer, { reserveDragons } from '../../Redux/dragons/dragons';

describe('Reducer states', () => {
  test('initial state', () => {
    expect(dragonsReducer(undefined , {})).toEqual([]);
  });

  test('Dragons state should return false', () => {
      const initialState = [
        {
          id: '1',
          reserved: false,
        },
      ];
      expect(dragonsReducer(initialState, reserveDragons('1'))).toEqual([{
        id: '1',
        reserved: true,
      }]);
    });
});
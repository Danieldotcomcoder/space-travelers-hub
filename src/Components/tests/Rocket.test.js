import rocketReducer, { reserveRockets } from '../../Redux/Rockets/rockets';

describe('State of the reducer', () => {
  test('test the initial state', () => {
    expect(rocketReducer(undefined, {})).toEqual([]);
  });
});

describe('Reserve a rocket', () => {
  test('Rocket state should return as false', () => {
    const initialState = [
      {
        id: '1',
        reserved: false,
      },
    ];
    expect(rocketReducer(initialState, reserveRockets('1'))).toEqual([{
      id: '1',
      reserved: true,
    }]);
  });
});

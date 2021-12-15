import missionsReducer, { JoinMission } from '../../Redux/missions/Mission';

describe('State of a mission Reducer', () => {
  test('Test the initial state', () => {
    expect(missionsReducer(undefined, {})).toEqual([]);
  });

  test('Join Mission', () => {
    const initialState = [
      {
        id: '1',
        joined: false,
      },
    ];
    expect(missionsReducer(initialState, JoinMission('1'))).toEqual([{
      id: '1',
      joined: true,
    }]);
  });
});

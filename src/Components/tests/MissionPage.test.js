import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../Redux/configureStore';
import Missions from '../MissionPage';

it('Renders Mission Page', () => {
  const missionpage = renderer.create(
    <Provider store={store}>
      <Missions />
      ,
    </Provider>,
  ).toJSON();
  expect(missionpage).toMatchSnapshot();
});

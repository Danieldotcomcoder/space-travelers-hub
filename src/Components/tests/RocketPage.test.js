import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rocket from '../RocketPage';
import store from '../../Redux/configureStore';

it('Renders Rocket Page', () => {
  const rocket = renderer.create(
    <Provider store={store}><Rocket /></Provider>,
  ).toJSON();
  expect(rocket).toMatchSnapshot();
});

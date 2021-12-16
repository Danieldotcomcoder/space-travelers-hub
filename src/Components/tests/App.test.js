import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from '../../App';
import store from '../../Redux/configureStore';

const APP = (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('App test', () => {
  it('Render App', () => {
    const app = renderer.create(APP).toJSON();
    expect(app).toMatchSnapshot();
  });
});

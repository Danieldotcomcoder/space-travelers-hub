/* eslint-disable prefer-destructuring */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import store from '../../Redux/configureStore';

const APP = (
  <Provider store={store}>
    <App />
  </Provider>
);

let link = null;
let result = null;

describe('App test', () => {
  it('Render App', () => {
    const app = renderer.create(APP).toJSON();
    expect(app).toMatchSnapshot();
  });

  describe('Specfic Page should appear when the corresponding button is clicked', () => {
    it('When mission button link is clicked', () => {
      render(APP);
      link = screen.getByText('Mission');
      userEvent.click(link);
      result = screen.getAllByText(/Mission/i)[1];
      expect(result.textContent).toBe('Mission');
    });
    it('When rocket button link is clicked', () => {
      render(APP);
      link = screen.getByText(/My profile/i);
      userEvent.click(link);
      result = screen.getAllByText(/Rocket/i)[1];
      expect(result.textContent).toBe('My Rockets');
      result = screen.getAllByText(/Mission/i)[1];
      expect(result.textContent).toBe('My Missions');
    });
  });
});

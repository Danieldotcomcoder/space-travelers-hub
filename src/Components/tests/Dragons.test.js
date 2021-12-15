import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Dragons from '../Dragons';
import store from '../../Redux/configureStore';

it('Renders Dragons Page', () => {
  const dragon = renderer.create(
    <Provider store={store}><Dragons /></Provider>,
  ).toJSON();
  expect(dragon).toMatchSnapshot();
});

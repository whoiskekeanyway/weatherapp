import renderer from 'react-test-renderer';
import Form from '../components/form';

it('renders correctly', () => {
  const tree = renderer
  .create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});

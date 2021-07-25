import {render} from '@testing-library/react';
import Spinner from './spinner.jsx';

describe('Component: Spinner', () => {
  it('Should render correctly', () => {
    const {container} = render(<Spinner/>);
    const spins = container.querySelectorAll('.spin');

    expect(spins.length).toEqual(13);
  });
});

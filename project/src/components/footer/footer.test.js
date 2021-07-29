import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import Footer from './footer.jsx';


describe('Component: Footer', () => {
  it('Should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <Footer/>
      </Router>
    );
    expect(getByText('© 2019 What to watch Ltd.')).toBeInTheDocument()
  });
});

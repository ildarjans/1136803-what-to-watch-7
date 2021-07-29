import {Router} from 'react-router-dom';
import {getNodeText, render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import Logo from './logo.jsx';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const logoLetters = ['W', 'T', 'W'];
    const {container} = render(
      <Router history={history}>
        <Logo className={'logo__link logo__link'}/>
      </Router>
    );

    container
      .querySelector('.logo__link.logo__link')
      .querySelectorAll('.logo__letter')
      .forEach((element, i) => {
        expect(getNodeText(element)).toEqual(logoLetters[i]);
      });
  });
})

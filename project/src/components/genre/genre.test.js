import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import Genre from './genre.jsx';

describe('Component: Genre', () => {
  const activeClassName = 'catalog__genres-item--active';
  it('Should render correctly active genre', () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <Genre isActive={true} onGenreClick={() => {}} genre={'Drama'}/>
      </Router>
    );
    expect(getByText('Drama')).toBeInTheDocument();
    expect(getByTestId('genre-item').classList.contains(activeClassName)).toBeTruthy();
  });
  it('Should render correctly simple genre', () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <Genre isActive={false} onGenreClick={() => {}} genre={'Comedy'}/>
      </Router>
    );
    expect(getByText('Comedy')).toBeInTheDocument();
    expect(getByTestId('genre-item').classList.contains(activeClassName)).toBeFalsy();
  });
});

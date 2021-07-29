import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import Genre from './genre.jsx';

describe('Component: Genre', () => {
  const activeClassName = 'catalog__genres-item--active';
  const history = createMemoryHistory();
  let handleGenreClick;
  beforeEach(() => {
    handleGenreClick = jest.fn();
  });
  it('Should render correctly active genre', () => {
    render(
      <Router history={history}>
        <Genre isActive={true} onGenreClick={handleGenreClick} genre={'Drama'}/>
      </Router>
    );
    expect(screen.getByText('Drama')).toBeInTheDocument();
    expect(screen.getByTestId('genre-item')).toHaveClass(activeClassName);
    userEvent.click(screen.getByTestId('genre-item'));
    expect(handleGenreClick).toHaveBeenLastCalledWith('Drama')
  });
  it('Should render correctly simple genre', () => {
    render(
      <Router history={history}>
        <Genre isActive={false} onGenreClick={handleGenreClick} genre={'Comedy'}/>
      </Router>
    );
    expect(screen.getByText('Comedy')).toBeInTheDocument();
    expect(screen.getByTestId('genre-item')).not.toHaveClass(activeClassName);
    userEvent.click(screen.getByTestId('genre-item'));
    expect(handleGenreClick).toHaveBeenLastCalledWith('Comedy')
  });
});

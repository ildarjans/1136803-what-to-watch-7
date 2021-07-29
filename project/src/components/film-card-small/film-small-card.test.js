import {createMemoryHistory} from 'history';
import FilmCardSmall from './film-card-small.jsx';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const countSetTimeoutCalls = () => (
  setTimeout.mock.calls.filter(([fn]) => !String(fn).includes('_flushCallback'))
);

describe('Component: FilmCardSmall', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  it('Should render correctly, without video preview', () => {
    const handleCardHover = jest.fn();
    const history = createMemoryHistory();
    console.error = jest.fn();
    const {rerender} = render(
      <Router history={history}>
        <FilmCardSmall
          id={'1'}
          title={'Bronson'}
          onCardHover={handleCardHover}
          videoSrc={'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'}
          hasVideo={false}
          image={'https://7.react.pages.academy/static/film/preview/bronson.jpg'}
        />
      </Router>
    );

    expect(screen.getByText('Bronson')).toBeInTheDocument();
    expect(screen.queryByTestId('video')).not.toBeInTheDocument();
    expect(screen.queryByTestId('image')).toBeInTheDocument();

    userEvent.hover(screen.getByTestId('small-card'));
    expect(countSetTimeoutCalls()).toHaveLength(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    rerender(
      <Router history={history}>
        <FilmCardSmall
          id={'1'}
          title={'Bronson'}
          onCardHover={handleCardHover}
          videoSrc={'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'}
          hasVideo={true}
          image={'https://7.react.pages.academy/static/film/preview/bronson.jpg'}
        />
      </Router>
    );
    expect(console.error).toHaveBeenCalledWith('Warning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.%s', expect.any(String))
    expect(screen.queryByTestId('video')).toBeInTheDocument();
    expect(screen.queryByTestId('image')).not.toBeInTheDocument();
  });
});

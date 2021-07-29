import {render, getByText} from '@testing-library/react';
import PlayButton from './play-button.jsx';

describe('Component: PlayButton', () => {
  it('Should render correctly', () => {
    const {getByText} = render(
      <PlayButton id={'1'}/>
    );
    expect(getByText('Play')).toBeInTheDocument();
  });
});

import React from 'react';
import {render, screen} from '@testing-library/react';
import PlayButton from './play-button.jsx';

describe('Component: PlayButton', () => {
  it('Should render correctly', () => {
    render(
      <PlayButton id={'1'}/>,
    );
    expect(screen.getByText('Play')).toBeInTheDocument();
  });
});

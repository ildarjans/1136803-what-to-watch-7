import React from 'react';
import * as Redux from 'react-redux';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import MyListButton from './my-list-button.jsx';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';


const createFakeStore = configureStore();
let dispatch;
let useDispatch;
let mockAddToFavorites;

jest.mock('../../middleware/thunk-api.js', () => ({
  get addToFavorites() {
    return mockAddToFavorites;
  },
}));

describe('Component: MyListButton', () => {
  beforeEach(() => {
    dispatch = jest.fn();
    mockAddToFavorites = jest.fn(() => 'AddToFavoritesReturnValue');
    useDispatch = jest.spyOn(Redux, 'useDispatch').mockReturnValue(dispatch);
  });
  it('Should render correctly if is favorite', () => {
    render(
      <Provider store={createFakeStore()}>
        <MyListButton id={'1'} isFavorite/>
      </Provider>,
    );
    expect(screen.getByTestId('in-list')).toBeInTheDocument();
    expect(screen.queryByTestId('add-to-list')).not.toBeInTheDocument();
    userEvent.click(screen.queryByRole('button'));
    expect(useDispatch).toBeCalledTimes(1);
    expect(mockAddToFavorites).toHaveBeenCalledWith('1', 0);
    expect(dispatch).nthCalledWith(1, 'AddToFavoritesReturnValue');
  });
  it('Should render correctly if is not favorite', () => {
    render(
      <Provider store={createFakeStore()}>
        <MyListButton id={'1'} isFavorite={false}/>
      </Provider>,
    );
    expect(screen.getByTestId('add-to-list')).toBeInTheDocument();
    expect(screen.queryByTestId('in-list')).not.toBeInTheDocument();

    userEvent.click(screen.queryByRole('button'));
    expect(useDispatch).toBeCalledTimes(1);
    expect(mockAddToFavorites).toHaveBeenCalledWith('1', 1);
    expect(dispatch).nthCalledWith(1, 'AddToFavoritesReturnValue');
  });
});

import {render, screen} from '@testing-library/react';
import MyListButton from './my-list-button.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Component: MyListButton', () => {
  it('Should render correctly if is favorite', () => {
    const createFakeStore = configureStore();
    render(
      <Provider store={createFakeStore()}>
        <MyListButton id={'1'} isFavorite={true}/>
      </Provider>
    );
    expect(screen.getByTestId('in-list')).toBeInTheDocument();
    expect(screen.queryByTestId('add-to-list')).not.toBeInTheDocument();
  });
  it('Should render correctly if is not favorite', () => {
    const createFakeStore = configureStore();
    render(
      <Provider store={createFakeStore()}>
        <MyListButton id={'1'} isFavorite={false}/>
      </Provider>
    );
    expect(screen.getByTestId('add-to-list')).toBeInTheDocument();
    expect(screen.queryByTestId('in-list')).not.toBeInTheDocument();
  });
});

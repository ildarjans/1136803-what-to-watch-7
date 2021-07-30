import React from 'react';
import SignInForm from './sign-in-form.jsx';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('Component, SignInForm', () => {
  let handleSubmitForm;
  beforeEach(() => {
    handleSubmitForm = jest.fn();
    render(
      <SignInForm onSubmit={handleSubmitForm}/>,
    );
  });
  it('Should render correctly if valid login and password', () => {
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('login'), 'example@hotmail.com');
    userEvent.type(screen.getByTestId('password'), 'qwerty');

    expect(screen.getByDisplayValue('example@hotmail.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('qwerty')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));

    expect(handleSubmitForm).toBeCalledTimes(1);
    expect(handleSubmitForm).toHaveBeenCalledWith({email: 'example@hotmail.com', password: 'qwerty'});
  });
  it('Should render correctly if invalid login', () => {

    userEvent.type(screen.getByTestId('login'), 'example');
    userEvent.click(screen.getByTestId('submit'));

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));

    expect(handleSubmitForm).not.toBeCalled();

  });
  it('Should render correctly if invalid password', () => {
    userEvent.type(screen.getByTestId('password'), ' ');
    userEvent.click(screen.getByTestId('submit'));

    expect(screen.getByText('Please enter password without whitespaces')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));

    expect(handleSubmitForm).not.toBeCalled();

  });
  it('Should render correctly if invalid both, login and password', () => {
    userEvent.type(screen.getByTestId('login'), 'example');
    userEvent.click(screen.getByTestId('submit'));

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    expect(screen.getByText('Please enter password without whitespaces')).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));

    expect(handleSubmitForm).not.toBeCalled();
  });
});

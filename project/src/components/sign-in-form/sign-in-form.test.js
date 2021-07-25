import SignInForm from './sign-in-form.jsx';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('Component, SignInForm', () => {
  it('Should render correctly if valid login and password', () => {
    render(<SignInForm onSubmit={() => {
    }}/>);

    expect(screen.getByText(/sign in/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('login'), 'example@hotmail.com');
    userEvent.type(screen.getByTestId('password'), 'qwerty');

    expect(screen.getByDisplayValue('example@hotmail.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('qwerty')).toBeInTheDocument();
  });
  it('Should render correctly if invalid login', () => {
    render(
      <SignInForm onSubmit={() => {
      }}/>
    );

    userEvent.type(screen.getByTestId('login'), 'example');
    userEvent.click(screen.getByTestId('submit'));

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();

  });
  it('Should render correctly if invalid password', () => {
    render(
      <SignInForm onSubmit={() => {
      }}/>
    );

    userEvent.type(screen.getByTestId('password'), ' ');
    userEvent.click(screen.getByTestId('submit'));

    expect(screen.getByText('Please enter password without whitespaces')).toBeInTheDocument();

  });
  it('Should render correctly if invalid both, login and password', () => {
    render(
      <SignInForm onSubmit={() => {
      }}/>
    );

    userEvent.type(screen.getByTestId('login'), 'example');
    userEvent.click(screen.getByTestId('submit'));

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    expect(screen.getByText('Please enter password without whitespaces')).toBeInTheDocument();
  });
});

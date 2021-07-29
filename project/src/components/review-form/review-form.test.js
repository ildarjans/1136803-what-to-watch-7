import ReviewForm from './review-form.jsx';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: ReviewForm', () => {
  it('Should render correctly. Case: not enough text', () => {
    const handleFormSubmit = jest.fn();
    render(
      <ReviewForm onSubmit={handleFormSubmit} id={'1'} errorMessage={''}/>
    );
    expect(screen.queryByTestId('comment')).toBeInTheDocument();
    expect(screen.queryByTestId('rating-star-5')).toBeInTheDocument();
    expect(screen.getByText(/post/i)).toBeInTheDocument();

    userEvent.type(screen.queryByTestId('comment'),'Not enough text');
    expect(screen.getByDisplayValue('Not enough text')).toBeInTheDocument();

    userEvent.click(screen.queryByTestId('post-button'));
    userEvent.click(screen.queryByTestId('rating-star-5'));
    expect(handleFormSubmit).toBeCalledTimes(0);
  });
  it('Should render correctly. Case: valid form', () => {
    const handleFormSubmit = jest.fn();
    const validComment = 'This review is absolutely valid and ready to submit and send to server.';
    render(
      <ReviewForm onSubmit={handleFormSubmit} id={'1'} errorMessage={''}/>
    );
    expect(screen.queryByTestId('comment')).toBeInTheDocument();
    expect(screen.queryByTestId('rating-star-1')).toBeInTheDocument();
    expect(screen.queryByTestId('rating-star-10')).toBeInTheDocument();
    expect(screen.getByText(/post/i)).toBeInTheDocument();

    userEvent.type(screen.queryByTestId('comment'), validComment);
    expect(screen.getByDisplayValue(validComment)).toBeInTheDocument();

    userEvent.click(screen.queryByTestId('rating-star-10'));
    userEvent.click(screen.queryByTestId('post-button'));
    expect(handleFormSubmit).toHaveBeenNthCalledWith(1, '1', {rating: '10', comment: validComment});
  });
  it('Should render correctly. Case: display error message', () => {
    const handleFormSubmit = jest.fn();
    render(
      <ReviewForm onSubmit={handleFormSubmit} id={'1'} errorMessage={'bad request error message'}/>
    );
    expect(screen.getByText('Something goes wrong, try again later.')).toBeInTheDocument();
  });
});

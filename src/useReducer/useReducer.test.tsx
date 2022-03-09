import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import UseReducer from './useReducer';

/**
 * example from https://testing-library.com/docs/example-react-hooks-usereducer/
 */
it('shows success message after confirm button is clicked', () => {
  const { getByText } = render(<UseReducer />);

  expect(getByText(/waiting/i)).toBeInTheDocument();

  fireEvent.click(getByText('Confirm'));

  expect(getByText('Confirmed!')).toBeInTheDocument();
});

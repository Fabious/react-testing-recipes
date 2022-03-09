import Counter from './Counter';
import { render, fireEvent } from '@testing-library/react';

test('increments counter after button is clicked', () => {
  const { getByText } = render(<Counter />);
  const countNode = getByText(/count:/i);

  expect(countNode.innerHTML).toBe('Count: 0');

  fireEvent.click(getByText('Click'));

  expect(countNode.innerHTML).toBe('Count: 1');

  fireEvent.click(getByText('Click'));
  fireEvent.click(getByText('Click'));

  expect(countNode.innerHTML).toBe('Count: 3');
});

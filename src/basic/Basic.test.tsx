import Basic from './Basic';
import { render } from '@testing-library/react';

test('most basic react test', () => {
  const { container } = render(<Basic />);

  expect(container.innerHTML).toMatchInlineSnapshot(`"<div>basic</div>"`);
});

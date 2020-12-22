import React from 'react';
import { render } from '@testing-library/react';
import Button from './';

test('renders learn react link', () => {
  const { container } = render(<Button />);
  expect(container).toContainHTML('button');
});

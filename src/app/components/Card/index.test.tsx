import React from 'react';
import { render } from '@testing-library/react';
import Card from './';

test('renders learn react link', () => {
  const { container } = render(<Card />);
  expect(container).toContainHTML('button');
});

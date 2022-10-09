import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Root from './Root'

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <Root />
    </Provider>
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});

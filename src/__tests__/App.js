import React from 'react';
import { mount, shallow, render } from 'enzyme';
import App from '../components/App';

test('renders the app', () => {
  render(<App />);
});

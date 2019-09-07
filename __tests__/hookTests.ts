import React from 'react';
import { mount } from 'enzyme';
import App from '../src/client/App';

describe('App', () => {
  it('renders', () => {
    //@ts-ignore
    mount(<App />);
  });
});
import React from 'react';
// import { render, fireEvent, getByTestId} from '@testing-library/react';

import { configure, shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Message from '../src/client/components/Message';

configure({ adapter: new EnzymeAdapter() });

describe('React Hooks Unit Tests', () => {
  let wrapper: ShallowWrapper;
  const msg = {
    id: 1,
    username: 'testUser',
    message: 'testMessage',
    date: new Date(),
  };
  const props = {
    id: 1,
    msg: msg,
  };
  describe('Message.tsx', () => {
    beforeAll(() => wrapper = shallow(<Message {...props} />))
    it('renders a list item tag', () => {
      expect(wrapper.type()).toEqual('li');
      
    });
    it('displays username, date, and message text', () => {
      const text = wrapper.text().slice(0, -1)
      expect(text).toEqual(`testUser (${msg.date}): testMessage`);
    });
    it('contains one button with X', () => {
      const buttons = wrapper.find('button');
      expect(buttons.length).toEqual(1);
      expect(buttons.text()).toEqual('X');
    });
  });
});
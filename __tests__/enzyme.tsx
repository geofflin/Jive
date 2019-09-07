import React from 'react';
// import { render, fireEvent, getByTestId} from '@testing-library/react';

import { configure, shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MessageDisplay from '../src/client/components/MessageDisplay';
import Message from '../src/client/components/Message';

configure({ adapter: new EnzymeAdapter() });

describe('React Hooks Unit Tests', () => {
  let wrapper: ShallowWrapper;
  describe('Message.tsx', () => {
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

  describe('MessageDisplay.tsx', () => {
    const messages = [];
    for (let i = 0; i < 5; i += 1) {
      messages.push({
        id: i,
        username: `testUser${i}`,
        message: `testMessage${i}`,
        date: new Date(),
      });
    }
    const props = { messages };
    beforeAll(() => wrapper = shallow(<MessageDisplay {...props} />))
    it('renders an unordered list tag', () => {
      expect(wrapper.type()).toEqual('ul');
    });
    it('renders correct number of Message components', () => {
      expect(wrapper.find('Message').length).toEqual(5);
    });
  });
});
import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MessageForm from '../../src/client/components/MessageForm';
import MessageDisplay from '../../src/client/components/MessageDisplay';
import Message from '../../src/client/components/Message';

configure({ adapter: new EnzymeAdapter() });

describe('Component Unit Tests', () => {
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
      deleteMessage: jest.fn(),
    };

    beforeAll(() => {
      wrapper = shallow(<Message {...props} />);
    });

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
    it('invokes delete onClick function', async () => {
      const buttons = wrapper.find('button');
      expect(props.deleteMessage.mock.calls.length).toBe(0);
      buttons.simulate('click');
      expect(props.deleteMessage.mock.calls.length).toBe(1);
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
    const props = {
      messages: messages,
      deleteMessage: jest.fn(),
    };

    beforeAll(() => {
      wrapper = shallow(<MessageDisplay {...props} />)
    });

    it('renders an unordered list tag', () => {
      expect(wrapper.type()).toEqual('ul');
    });
    it('renders correct number of Message components', () => {
      expect(wrapper.find('Message').length).toEqual(5);
    });
  });

  describe('MessageForm.tsx', () => {
    const props = {
      handleClick: jest.fn(),
      handleChange: jest.fn(),
    };

    beforeAll(() => {
      wrapper = shallow(<MessageForm {...props} />)
    });

    it('should render two inputs that invokes handleChange when changed', () => {
      const inputs = wrapper.find('input');
      expect(inputs.length).toBe(2);
      expect(props.handleChange.mock.calls.length).toBe(0);
      inputs.at(0).simulate('change');
      expect(props.handleChange.mock.calls.length).toBe(1);
      inputs.at(1).simulate('change');
      expect(props.handleChange.mock.calls.length).toBe(2);
    });
    it('should have one button labeled POST that invokes handleClick when clicked', () => {
      const buttons = wrapper.find('button');
      expect(buttons.length).toBe(1);
      expect(buttons.text()).toBe('POST');
      expect(props.handleClick.mock.calls.length).toBe(0);
      buttons.simulate('click')
      expect(props.handleClick.mock.calls.length).toBe(1);
    });
  });

});
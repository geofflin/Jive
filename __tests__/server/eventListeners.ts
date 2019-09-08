import WS from "jest-websocket-mock";
import wsEventListener from '../../src/server/webSockets/eventListeners';
import * as events from '../../src/client/events/eventCreators';

describe('WebSocket event listener integration tests', () => {
  const wss = new WS("ws://localhost:1234");
  const messageController = {
    getMessages: jest.fn(),
    addMessage: jest.fn(),
    deleteMessage: jest.fn(),
  };
  let event;

  afterEach(() => {
    Object.values(messageController).forEach(mockFunc => mockFunc.mockClear());
  });

  it('should invoke getMessages controller for GET events', async () => {
    event = JSON.stringify(events.getMessages());
    expect(messageController.getMessages.mock.calls.length).toBe(0);
    expect(messageController.addMessage.mock.calls.length).toBe(0);
    expect(messageController.deleteMessage.mock.calls.length).toBe(0);
    await wsEventListener(event, wss, messageController);
    expect(messageController.getMessages.mock.calls.length).toBe(1);
    expect(messageController.addMessage.mock.calls.length).toBe(0);
    expect(messageController.deleteMessage.mock.calls.length).toBe(0);
  });
  it('should invoke addMessage controller for POST events', async () => {
    event = JSON.stringify(events.addMessage('Geoff', 'Hello!'));
    expect(messageController.getMessages.mock.calls.length).toBe(0);
    expect(messageController.addMessage.mock.calls.length).toBe(0);
    expect(messageController.deleteMessage.mock.calls.length).toBe(0);
    await wsEventListener(event, wss, messageController);
    expect(messageController.getMessages.mock.calls.length).toBe(1);
    expect(messageController.addMessage.mock.calls.length).toBe(1);
    expect(messageController.deleteMessage.mock.calls.length).toBe(0);
  });
  it('should invoke deleteMessage controller for DELETE events', async () => {
    event = JSON.stringify(events.deleteMessage(7));
    expect(messageController.getMessages.mock.calls.length).toBe(0);
    expect(messageController.addMessage.mock.calls.length).toBe(0);
    expect(messageController.deleteMessage.mock.calls.length).toBe(0);
    await wsEventListener(event, wss, messageController);
    expect(messageController.getMessages.mock.calls.length).toBe(1);
    expect(messageController.addMessage.mock.calls.length).toBe(0);
    expect(messageController.deleteMessage.mock.calls.length).toBe(1);
  });
});

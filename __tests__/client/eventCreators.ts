import { getMessages, addMessage, deleteMessage } from '../../src/client/events/eventCreators';

describe('Event creators unit tests', () => {
  let method: string;
  let payload: any;

  it('getMessages should return object with GET method property', () => {
    method = 'GET';
    expect(getMessages()).toEqual({ method });
  });

  it('addMessage should return object with POST method property and payload', () => {
    method = 'POST';
    const username = 'testUser';
    const message = 'hi';
    payload = { username, message };
    expect(addMessage(username, message)).toEqual({ method, payload });
  });

  it('deleteMessage should return object with DELETE method property and payload', () => {
    method = 'DELETE';
    const id = 3;
    payload = id;
    expect(deleteMessage(id)).toEqual({ method, payload });
  });
});
export const getMessages = () => ({
  method: 'GET',
});

export const addMessage = (username: string, message: string) => ({
  method: 'POST',
  payload: { username, message },
});

export const deleteMessage = (id: number) => ({
  method: 'DELETE',
  payload: id,
});

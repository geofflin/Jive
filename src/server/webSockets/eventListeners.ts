const wsEventListener = async (event: string, wss: any, messageController: any) => {
  const { method, payload } = JSON.parse(event);
  const { getMessages, addMessage, deleteMessage } = messageController;
  switch (method) {
    case 'POST':
      await addMessage(payload);
      break;
    case 'DELETE':
      await deleteMessage(payload);
      break;
    default:
  }
  await getMessages(wss);
}

export default wsEventListener;

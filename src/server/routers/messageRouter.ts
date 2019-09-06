import * as express from 'express';
import messageController from '../controllers/messageController';

const messageRouter = express.Router();
const {
  getMessages,
  addMessage,
  editMessage,
  deleteMessage,
} = messageController;

messageRouter.get('/', getMessages);
messageRouter.post('/', addMessage);
messageRouter.patch('/:messageId', editMessage);
messageRouter.delete('/:messageId', deleteMessage);

export default messageRouter;
const messageRouter = require('express').Router();
const {
  getMessages,
  postMessage,
  editMessage,
  deleteMessage,
} = require('../controllers/messageController.js');

messageRouter.get('/', getMessages);
messageRouter.post('/', postMessage);
messageRouter.patch('/:messageId', editMessage);
messageRouter.delete('/:messageId', deleteMessage);

module.exports = messageRouter;
const messageController = {};
// Implement Database Logic Here to get messages from elephantsql
messageController.getMessages = (req, res, next) => {
  res.json({ test: 'its working!' });
}


module.exports = messageController;
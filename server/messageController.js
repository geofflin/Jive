const messageController = {};
// Implement Database Logic Here to get messages from elephantsql
messageController.getMessages = (req, res, next) => {
  res.send('Im in getMessages messageController!');
}


module.exports = messageController;
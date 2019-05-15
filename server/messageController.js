const messageController = {};
// Implement Database Logic Here to get messages from elephantsql
messageController.getMessages = (req, res, next) => {
  res.json({ test: 'its working!' });
}

messageController.postMessage = (req, res, next) => {
  console.log(req.body);
  res.json({ test: 'messageController postMessage ran!' });
}

module.exports = messageController;
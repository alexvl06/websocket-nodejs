const store = require('./store');

function addMessage(user, message) {
  return new Promise(function (resolve, reject) {
    if(!user||!message) {
      console.error("[messageController] There is not user or message")
      return reject('Datas are incorrect.')}
    const fullMessage = {
      user: user,
      message: message,
      date: new Date()
    };
    store.add(fullMessage)
    console.log(fullMessage)
    resolve(fullMessage);
  });
}

function getMessages() {
  return new Promise(function (resolve, reject) {
    resolve(store.list())
  })
}

module.exports = {
  addMessage,
  getMessages,
};

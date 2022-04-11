const store = require('./store');

function addMessage(chat, user, message) {
  return new Promise(function (resolve, reject) {
    if(!user||!message) {
      console.error("[messageController] There is not user or message")
      return reject('Datas are incorrect.')}
    const fullMessage = {
      chat:chat,
      user: user,
      message: message,
      date: new Date()
    };
    store.add(fullMessage)
    console.log(fullMessage)
    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise(function (resolve, reject) {
    resolve(store.list(filterUser))
  })
}

function updateMessage(id, message){
  return new Promise(async (resolve, reject)=>{
    if(!id || !message ){
      reject('Invalid data')
      return false
    }
   const result = await store.updateText(id, message)
   resolve(result)
  })

}

function deleteMessage(id){
  return new Promise((resolve, reject)=>{
    if(!id){
      reject('Invalid id')
      return false
    }
    store.remove(id)
    .then(()=>{resolve()}).catch(e=>{
      reject(e)
    })
  })
}
module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};

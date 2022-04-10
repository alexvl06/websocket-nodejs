const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller')
router.get('/', function(req, res){
  controller.getMessages()
  .then((messageList) => {
    response.success(req, res, messageList, 200)
  })
  .catch((error) => {
    response.error(req, res, 'Unexpected error', 500, error)
  })
})

router.post('/', function(req, res){
 
   controller.addMessage(req.body.user, req.body.message).then((fullMessage)=>{ 
    response.success(req, res, fullMessage, 201)
   })
   .catch(err=>{response.error(req, res, 'Invalid information: ' + err, 400, 'Controller error.' );})

   })
  //res.send('Message: "'+ req.body.Message+'" was added correctly');



module.exports = router;

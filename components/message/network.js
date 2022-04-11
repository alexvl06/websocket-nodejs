const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller')
const multer = require('multer')
const upload = multer({
  dest:'uploads/'
})

router.get('/', function(req, res){
  const filterMessage = req.query.user||null
  controller.getMessages(filterMessage)
  .then((messageList) => {
    response.success(req, res, messageList, 200)
  })
  .catch((error) => {
    response.error(req, res, 'Unexpected error', 500, error)
  })
})

router.post('/', upload.single('file'), function(req, res){
 
   controller.addMessage(req.body.chat, req.body.user, req.body.message).then((fullMessage)=>{ 
    response.success(req, res, fullMessage, 201)
   })
   .catch(err=>{response.error(req, res, 'Invalid information: ' + err, 400, 'Controller error.' );})

   })
  //res.send('Message: "'+ req.body.Message+'" was added correctly');

router.patch('/:id', function(req,res){
  controller.updateMessage(req.params.id, req.body.message).then((data)=>{
    response.success(req,res,data,200)
  }).catch(e=>{
    response.error(req,res,'Error interno', 500, e)
  })
})

router.delete('/:id', (req,res)=>{
  controller.deleteMessage(req.params.id)
  .then(()=>{
    response.success(req, res,'Message '+String(req.params.id)+' was deleted.', 200 )
    .catch(e=>{
      response.error(req,res,'internal error', 500, e)
    })
  })
})

module.exports = router;

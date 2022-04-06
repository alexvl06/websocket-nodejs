const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', function(req, res){
 
  console.log(req.headers);
  res.header({
    "custom-header":"Our personalize value"
  })
  res.status(201).send({body:"Creado correctamente"});
})

router.post('/message', function(req, res){
 
  console.log(req.body);
  console.log(req.query);
  res.send('Message: "'+ req.body.Message+'" was added correctly');
})
// app.use('/', (req, res)=> {
//   res.send('Hola')
// })

app.listen(3000)
console.log('The app listens on http://localhost:3000');
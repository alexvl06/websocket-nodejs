const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db')
const router = require('./network/routes')

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);
db('mongodb://root:PZTsIovVD1iXy4jl@cluster0-shard-00-00.3yqqu.mongodb.net:27017,cluster0-shard-00-01.3yqqu.mongodb.net:27017,cluster0-shard-00-02.3yqqu.mongodb.net:27017/platziChat?ssl=true&replicaSet=atlas-3zw6s6-shard-0&authSource=admin&retryWrites=true&w=majority')

app.use('/app',express.static('public'));

app.listen(3000)
console.log('The app listens on http://localhost:3000');
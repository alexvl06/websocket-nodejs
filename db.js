const db = require('mongoose')
db.Promise = global.Promise
//'mongodb://root:PZTsIovVD1iXy4jl@cluster0-shard-00-00.3yqqu.mongodb.net:27017,cluster0-shard-00-01.3yqqu.mongodb.net:27017,cluster0-shard-00-02.3yqqu.mongodb.net:27017/platziChat?ssl=true&replicaSet=atlas-3zw6s6-shard-0&authSource=admin&retryWrites=true&w=majority'
async function connect(url){
    await db.connect(url, {useNewUrlParser: true,
    useUnifiedTopology:true
    }).then(console.log('[db] was connected successfully.'))
    .catch(err=>console.error('[db]', err))
}


module.exports = connect
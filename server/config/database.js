const mongoose = require('mongoose')

const databaseConnection = () => {
    mongoose.connect("mongodb+srv://varshasoundar7:mCTk9ejQh7gw7NGN@cluster0.xsj83.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data)=>{
        console.log(`database connected successfully at server ${data.connection.host}`)
    })
}

module.exports = databaseConnection
const app = require('./app')
const databaseConnection = require('./config/database')
const cloudinary  = require('cloudinary')
const dotenv = require('dotenv')
dotenv.config({path:"./config/config.env"})


cloudinary.config({
    cloud_name: "dxqbizs18" ,
    api_key: "149844298691891",
    api_secret: "*********************************"
}) 

databaseConnection()



app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${3000}`)
})
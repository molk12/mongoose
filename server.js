const express=require('express')
const connectDB = require('./config/connectDB.JS');
const route = require('./routes/contact');
require("dotenv").config()
const app=express()



connectDB()



app.use(express.json())

//////route:/api/name of db//////
app.use('/api/contacts',route)


const port=5000
app.listen(port,()=>{     
  console.log(`server is running on  ${port}`)

})



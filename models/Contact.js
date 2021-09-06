const mongoose=require('mongoose')



////////////CREATE A SCHEMA//////////////

const Contact= new mongoose.Schema(
    {
    name:String,
    email:String,
    age:Number
    }
)

//////////MODEL////////
//////////contact:name of DB , Contact:name of schema ////////

module.exports=mongoose.model( 'contact',Contact)


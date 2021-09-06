const express=require('express')
const contact = require('../models/contact')


const route=express.Router()
//POST
//req.body
route.post('/',async (req,res)=> {


    try {

        const newcontact= new Contact (req.body)
    await newcontact.save()

    res.status(200).send({msg:'user added',newcontact})

    } catch (error) {
        res.status(500).send({msg:'could not add user'})
        }
})
module.exports=route
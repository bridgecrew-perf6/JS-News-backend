const express = require("express")


const router= express.Router()



const Newss=require("../models/newstories.model")


router.post("/",async (req,res)=>{

    const newstories= await Newss.create(req.body)
    return res.status(200).send(newstories)


});


router.get("/",async (req,res)=>{

    const newstories= await Newss.find().lean().exec()
    return res.status(200).send(newstories)


})
module.exports=router
const express=require("express")


const router=express.Router()



const Tops=require("../models/topstories.model")


router.post("/",async (req,res)=>{

    const topstories= await Tops.create(req.body)
    return res.status(200).send(topstories)


});


router.get("/",async (req,res)=>{

    const topstories= await Tops.find().lean().exec()
    return res.status(200).send(topstories)


})
module.exports=router
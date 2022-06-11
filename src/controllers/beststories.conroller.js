const express=require("express")


const router=express.Router()



const Bests=require("../models/beststories.model")


router.post("/",async (req,res)=>{

    const beststories= await Bests.create(req.body)
    return res.status(200).send(beststories)


});


router.get("/",async (req,res)=>{

    const beststories= await Bests.find().lean().exec()
    return res.status(200).send(beststories)


})
module.exports=router
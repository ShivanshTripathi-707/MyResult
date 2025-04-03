const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel")

// generating result
router.post("/add", async (req,res)=>{
    try {
        const {name, email, rollNo, english, maths, physics, chemistry, hindi, ped} = req.body; 
        await userModel.create({name, email, rollNo, english, maths, physics, chemistry, hindi, ped})
        res.json({success : true, message : "Result Generated Successfully!"})

    } catch (error) {
        res.json({success : false, message : "Error"})
    }
})

// getting results
router.get("/get", async (req,res)=>{
    try {
        let users = await userModel.find();
        res.json({success : true, users})

    } catch (error) {
        res.json({success : false, message : "Error"})
    }
})

// getting data on the basis of roll no
router.post("/student/:rollNo", async (req,res)=>{
    try {
        const { rollNo } = req.params;
        const {email} = req.body;
    let student = await userModel.findOne({rollNo});
    if(!student){
        return res.json({success : false, message : "No student found with this roll no"})
    }else{
        let studentMail = await userModel.findOne({email});
        if(!studentMail){
            return res.json({success : false, message : "Invalid email address"})
        }else{
            let searchedStudent = await userModel.findOne({rollNo});
            res.json({success : true, searchedStudent})
        }
    }
    } catch (error) {
        res.json({success : false, message : "Error"})
    }
})


router.get("/displayResult/:rollNo", async (req,res)=>{
    const {rollNo} = req.params;
    let user = await userModel.findOne({rollNo});
    if(!user){
        return res.json({success : false, message : "No Result Found"});
    }else{
        let searchedUser = await userModel.findOne({rollNo});
        return res.json({success : true, searchedUser})
    }
})

module.exports = router
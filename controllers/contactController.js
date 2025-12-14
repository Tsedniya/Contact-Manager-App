const asyncHandler = require("express-async-handler")
const getContacts = asyncHandler(async(req,res) =>{
    res.status(200).json({message:"get all contact"})
})

const createContact = asyncHandler(async(req,res)=>{
    console.log('the requst body is here', req.body)
    const {name,email,phone} = req.body;
    if (!name || !email || !phone){
        res.status(400)
        throw new Error("All Fields are mandatory")
    }
    res.status(200).json({message:"create all contacts"});
});

const getContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Get contacts for ${req.params.id}`});
})

const updateContact= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`update contacts for ${req.params.id}`});
})

const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Delete contacts for ${req.params.id}`});
})


module.exports = {getContacts, deleteContact, updateContact,createContact,getContact };
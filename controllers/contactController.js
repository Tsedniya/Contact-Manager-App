
const getContacts = (req,res) =>{
    res.status(200).json({message:"get all contact"})
}

const createContact = (req,res)=>{
    console.log("The request body is:", req.body);
    res.status(200).json({message:"create all contacts"});
};

const getContact = (req,res)=>{
    res.status(200).json({message:`Get contacts for ${req.params.id}`});
}
//updated type
const updateContact= (req,res)=>{
    res.status(200).json({message:`update contacts for ${req.params.id}`});
}

const deleteContact = (req,res)=>{
    res.status(200).json({message:`Delete contacts for ${req.params.id}`});
}


module.exports = {getContacts, deleteContact, updateContact,createContact,getContact };
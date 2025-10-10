//@desc Create contact
//@route get /api/contacts
//@access public
const getContacts = (req,res) =>{
    res.status(200).json({message:"get all contact"})
}

const  createContact = (req,res)=>{
    console.log("The request body is:", req.body);
    const {name,email,phone} = req.body;
    if(!name || !email  || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(200).json({message:"create all contacts"});
};

const getContact = (req,res)=>{
    res.status(200).json({message:`Get contacts for ${req.params.id}`});
}

const updateContact= (req,res)=>{
    res.status(200).json({message:`update contacts for ${req.params.id}`});
}

const deleteContact = (req,res)=>{
    res.status(200).json({message:`Delete contacts for ${req.params.id}`});
}


module.exports = {getContacts, deleteContact, updateContact,createContact,getContact };
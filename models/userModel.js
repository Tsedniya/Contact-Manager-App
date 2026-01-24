const mongoose = require("mongoose");

const userSchema = mongooose.Schema({
    username:{
        type:String,
        required:[true,"please add the user name"],
    },
    email:{
        type:String,
        required:[true,"please add the user email"],
        unique:[true,"Email adress already taken"],
    },
    password:{
        type:String,
        required:[true,"please add the user password"],
    },
},
{
    timestamps:true,
});

module.exports= mongoose.model("User", userSchema);
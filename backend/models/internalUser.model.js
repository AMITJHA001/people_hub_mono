import mongoose from "mongoose";

const internalUserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    roles:[{type:mongoose.Schema.Types.ObjectId, ref:"InternalRole",required:true}],
    isActive:{type:Boolean,default:true}
},{
    timestamps:true
})


const InternalUser = mongoose.model("InternalUser",internalUserSchema,"internal_user")

export default InternalUser;
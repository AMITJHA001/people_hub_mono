import mongoose from "mongoose";


const internalRolesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    key:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    description:{
        type:String,
        trim:true,
        default:""
    },
    isSystem:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

const internalRole = mongoose.model("InternalRole",internalRolesSchema,"internal_roles");

export default internalRole;
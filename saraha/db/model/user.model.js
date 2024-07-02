import { Schema, Types, model } from "mongoose";

const userSchema = new Schema({
  userName: { type: String, required: true , unique:true },
  email: { type: String, required: true , unique :true },
  password: { type: String, required: true },
  profilePic:{
    type:Boolean,
    default:false,
  },
isloggedIn:{
    type:Boolean,
    default:false,
},
gender:{
type:String,
enum:["Female" , "Male"],
},
},

);

export const User = model("User", userSchema);

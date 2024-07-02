import { Message } from "../../db/model/message.model.js";
import { User } from "../../db/model/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';



export const sendmessage = async(req ,res,next)=>{
const {content ,recieverId }= req.body;


// check user
const checkuser =await User.findById(recieverId);
if (!checkuser){
    return next(newError ("user not found"));

}

const message =await Message.create({content , recieverId});
return res.json({succes:true , message:"message created succesfully "  , message}); 
 
}


export const usermessages = async(req ,res,next)=>{
    
    const {recieverId }= req.body;
    const messages =await Message.findOne({recieverId});
    if (!messages){
        return next(newError ("user not found"));    
    }
    return res.json({succes:true , message:"here your messages"  , messages})





}




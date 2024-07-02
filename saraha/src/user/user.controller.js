import { User } from "../../db/model/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';



////////////////////////////////////creation///////////////////
export const signup=async (req , res , next )=>{

    // data from body 
    const {userName , email , gender , password , confirmpass  }=req.body;
   
     //check the pass.
     if (password !=confirmpass)     
     {
    return next(new Error("password must match"));
      }
      // hashing 
     let hashpassword = bcryptjs.hashSync(password , 8);
         // check email
     const isUser = await User.findOne({email})
     if (isUser){
      return next(new Error("email must be  unique"));
     }
     // create 
     const user = await User.create ({userName , email , password: hashpassword , gender});
     const token = jwt.sign({id:user._id , email:user.email}, process.env.TOKENKEY);
     return res.json({success:true , error:"user added succesfully" , token : token});
   
};
///////////////////////////////////login/////////////////////
 export const login= async(req , res , next )=>{
   
      const {email , password}= req.body;
     
// check email 
const user = await User.findOne({email});

if (!user)
return next(new Error("email doesn't exist") );

// check pass
const checkpass=bcryptjs.compare(password , user.password)
if (!checkpass){
   return next(new Error("wrong password try another time "));

}
const token = jwt.sign({id:user._id , email:user.email}, process.env.TOKENKEY);

return res.json({success:true , token})

  
 };

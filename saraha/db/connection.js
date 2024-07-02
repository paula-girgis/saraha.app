import mongoose from "mongoose";
export const connectdb  =async (req , res , next )=>{
     await mongoose.connect ('mongodb://127.0.0.1:27017/saraha').then (()=>{
        console.log("database is connected");

    }).catch((error)=>{
        console.log("there is a problem in connection (DB) " , error);
    }) 
}

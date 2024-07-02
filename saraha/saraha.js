import express from  'express' ;
import { connectdb } from './db/connection.js';
import userRouter from "./src/user/user.router.js";
import messageRouter from "./src/message/message.router.js";  
import dotenv from "dotenv";
dotenv.config(); //path
const app = express();
connectdb();
app.use(express.json());
const port = 2500;

app.use(userRouter);
app.use(messageRouter);




app.all('/*', (req , res , next )=>{
    next(new Error("api doesn't exist "));
 })
 app.use((error  , req , res , next)=>
{
   return res.json({success: false , message:error.message , stack:error.stack  });
}) ; 




app.listen(port, () => console.log(`Example app listening on port ${port}!`));


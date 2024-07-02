import {Router} from"express";
import { catchError } from "../utilties/catchError.js";
import {sendmessage  , usermessages} from './message.controller.js'
import { isAuth } from "../../middelware/isAuth.js";
const router = Router();


/// send message 
router.post('/sendmessage' , catchError(sendmessage));




//user messages

router.get('/usermessages' , catchError(usermessages));


export default router;

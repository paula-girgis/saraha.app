import { Router } from "express";
import { catchError } from "../utilties/catchError.js";
import {signup,login } from './user.controller.js';
const router = Router();

//Signup
router.post('/signup' , catchError(signup));


//login
router.get('/loglog' , catchError(login));

export default router ;
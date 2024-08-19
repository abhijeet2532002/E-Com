import express from "express";
import userRouter from './UserRouter/userRouter.js';
import createSession from "../auth/createSession.js";

const router = express.Router();
router.use('/api/user',userRouter);
router.post('/api/auth/token',createSession.createToken)


export default router;
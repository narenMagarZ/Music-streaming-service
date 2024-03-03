import { authRouter } from "./auth-router";
import { userRouter } from "./user-router";
import express from 'express'

export const router = express.Router()
router.use('/user',userRouter)
router.use('/auth',authRouter)
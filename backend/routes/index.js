import { authRoute } from "./auth.js";
import { userRoute } from "./user.js";
import express from 'express'

export const route = express.Router()
route.use('/user',userRoute)
route.use('/auth',authRoute)
import BaseController from './base-controller'
import User from '../models/user.js'
import joi from 'joi'



class AuthController  extends BaseController{
    async login(req,res,next){
        const {username,gmail,gId} = req.body
        try{
            
        }
        catch(error){
            console.error("Error in login",error)
        }
    }
    async register(req,res,next){
        try{

        }
        catch(error){
            console.error("Error in registering",error)
        }
    }
}

export default new AuthController()
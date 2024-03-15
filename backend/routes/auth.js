import express from 'express'
import joi from 'joi'
export const authRoute = express.Router()

const usernameValidation = joi
    .string()
    .required()
    .min(3)
    .max(30)
    .pattern(new RegExp('^[a-zA-Z0-9]+$'))
    .messages({
        'string.base':'Username must be a string',
        'string.empty':'Username is required',
        'string.min':'Username must be at least {#limit} characters long',
        'string.max':'Username cannot exceed {#limit} characters',
        'string.pattern.base':'Username must contain only alphanumeric characters'
    })


const validateRequest = ({body})=>{
    console.log(body,'body')
}

authRoute.post('/login',validateRequest())
authRoute.post('/register')
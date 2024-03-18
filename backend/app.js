import express from 'express'
import { route } from './routes/index.js'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/v1',route)


// global error handler
app.use((error,req,res,next)=>{
    const status = error.status 
    const message = error.message
    return res.status(status).json({message})
})
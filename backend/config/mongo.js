import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
// systemctl start mongod 
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("mongodb connection succeed")
}).catch(err=>{
    console.error("Error connecting to mongodb:",err)
})
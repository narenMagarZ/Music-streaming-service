import mongoose from 'mongoose'

mongoose.connect("mongodb://127.0.0.1:").then(()=>{
    console.log("mongodb connection succeed")
}).catch(err=>{
    console.error("Error connecting to mongodb:",err)
})
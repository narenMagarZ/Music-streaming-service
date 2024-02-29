import mongoose from 'mongoose'

const songSchema = new mongoose.Schema({
    name:{type:String,required:true},
    artist:{type:[]},
    genre:{type:String},
    duration:{type:Number},
    likes:{type:[]},
    playCount:{type:Number},

},{timestamps:true})

export const Song = mongoose.model("Song",songSchema)
import mongoose from 'mongoose'

const songSchema = new mongoose.Schema({
    title:{type:String,required:true},
    artists:{type:[]},
    genre:{type:[]},
    thumbnail:String,
    duration:{type:String},
    likes:{type:[],default:[]},
    path:{type:String,required:true},
    playCount:{type:Number,default:0},
    releaseDate:{type:String}
},{timestamps:true})

export const Song = mongoose.model("Song",songSchema)
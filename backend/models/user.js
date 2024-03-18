import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    image:{type:String,unique:true},
    playlists:[],
    likedSongs:[]
},{timestamps:true})

export const User = mongoose.model('User',userSchema)
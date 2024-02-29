import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gmail:{
        type:String,
        required:true,
        unique:true
    },
    googleId:{type:String,unique:true},
    profilePic:{type:String,unique:true},
    playlists:[],
    likedSongs:[]
},{timestamps:true})

export const User = mongoose.model('User',userSchema)
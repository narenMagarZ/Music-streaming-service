import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    name:{type:String},
    songs:{type:[]}
},{timestamps:true})


export const Playlist = mongoose.model("Playlist",playlistSchema)
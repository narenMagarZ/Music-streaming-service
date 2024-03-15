import express from 'express'

export const userRoute = express.Router()


userRoute.get('/')
userRoute.post('/create-playlist')
userRoute.post('/add-song-to-playlist')
userRoute.post('/like-song')
userRoute.get('/playlist')
userRoute.get('/like-song')
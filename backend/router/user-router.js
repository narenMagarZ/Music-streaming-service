import express from 'express'

export const userRouter = express.Router()


userRouter.get('/')
userRouter.post('/create-playlist')
userRouter.post('/add-song-to-playlist')
userRouter.post('/like-song')
userRouter.get('/playlist')
userRouter.get('/like-song')
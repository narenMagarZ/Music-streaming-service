import {createClient} from 'redis'


export const client = await createClient()
    .on('error',err=>{
        console.error("Redis client error:",err)
    }).connect()


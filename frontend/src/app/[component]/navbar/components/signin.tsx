"use client"
import {signIn} from 'next-auth/react'

export default function Signin(){
    async function handleSignin(){
        try{
            await signIn('google') 
        }
        catch(error){
            console.error("Error signing in:",error)
        }
    }
    return(
        <button 
        className='rounded bg-black text-white px-3 py-2 text-sm'
        onClick={handleSignin}>
            Sign In
        </button>
    )
}
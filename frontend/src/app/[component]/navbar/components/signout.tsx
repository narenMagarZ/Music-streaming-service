"use client"
import {signOut} from 'next-auth/react'

export default function Signout(){
    function handleSignout(){
        signOut()
    }
    return(
        <button 
        className='rounded px-3 py-2 text-sm text-white bg-neutral-500 hover:bg-neutral-600'
        onClick={handleSignout}>
            Sign out
        </button>
    )
}
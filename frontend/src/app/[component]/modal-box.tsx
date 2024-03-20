"use client"
import { useEffect, useRef, useState } from "react"
import { getCookie } from "cookies-next"
import { MdEdit,MdCancel } from "react-icons/md";
export default function ModalBox({
    type,
    closeModal
}:{type:"profile"|'create-playlist'|'your-playlists'|'liked-songs'|'',closeModal:()=>void}){
    return(
        <div 
        // onClick={toggleModal}
        className="fixed  inset-0 flex justify-center items-center z-50">
            <div 
            className="bg-white rounded-md p-4">
                {
                    type === 'profile'  && <ProfileForm closeModal={closeModal}/> 
                }
                {
                    type === 'create-playlist' && <CreatePlaylistForm closeModal={closeModal}/>
                }
            </div>
        </div>
    )
}


function ProfileForm({closeModal}:{closeModal:()=>void}){
    const [profileName,setProfileName]=useState('')
    const [editProfileName,setEditProfileName] = useState(false)
    const profileNameRef = useRef<HTMLInputElement>(null)
    const [email,setEmail] =useState('')
    useEffect(()=>{
        // fetch the user data 
        const token = getCookie('token')
            fetch('http://localhost:5000/api/v1/user',{
                headers:{
                    'authorization':`Bearer ${token}`
                }
            }).then(async res=>{
                const user = await res.json()
                console.log(user) // name,email
                if(res.ok && res.status === 200){
                    setProfileName(user.name)
                    setEmail(user.email)
                }
            }).catch(error=>{
                console.error(error)
            })

    },[])
    function handleProfileEdit(){
        const token = getCookie('token')
        fetch('http://localhost:5000/api/v1/user',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'authorization':`Bearer ${token}`
            },
            body:JSON.stringify({profileName})
        }).then(res=>{

        }).catch(error=>{
            console.error(error)
        })

    }
    return(
        <div className="">
            <h4 className="text-center font-bold text-gray-700">Profile</h4>
            <br/>
            <div className="flex flex-col gap-y-2">
                <div>
                    <label className="text-sm font-semibold text-gray-600">Name</label>
                    <br/>
                    <div className="inline-flex items-center gap-x-2">
                        <input 
                        ref = {profileNameRef}
                        value={profileName}
                        disabled
                        onChange={(e)=>{
                            setProfileName(e.currentTarget.value)
                        }}
                        className="p-1 text-sm text-gray-700 rounded border" />
                        {
                            !editProfileName ? <button 
                            onClick={()=>{
                                profileNameRef.current?.removeAttribute('disabled')
                                setEditProfileName(true)
                            }}
                            className="hover:bg-gray-200 p-1 rounded-full">
                                <MdEdit/>
                            </button> : <button 
                        onClick={()=>{
                            setEditProfileName(false)
                            profileNameRef.current?.setAttribute('disabled',"true")
                        }}
                        className="hover:bg-gray-200 p-1 rounded-full">
                            <MdCancel/>
                        </button>

                        }
                        
                        
                    </div>
                </div>
                <div>
                    <label className="text-sm font-semibold text-gray-600">Email</label>
                    <br/>
                    <div className="inline-flex items-center gap-x-2">
                        <input 
                        value={email}
                        className="text-sm p-1 text-gray-700 rounded border"
                        disabled />
                        
                        
                    </div>
                </div>
                <div className="mt-2 inline-flex text-white text-xs justify-end w-100 gap-x-2">
                    <button
                    onClick={closeModal}
                    className="bg-gray-400 hover:bg-gray-500 rounded px-2 py-1">Cancel</button>
                    <button 
                    onClick={handleProfileEdit}
                    className="bg-blue-400 hover:bg-blue-500 rounded px-2 py-1">Save</button>
                </div>
            </div>
        </div>
    )
}

function CreatePlaylistForm({closeModal}:{closeModal:()=>void}){
    const [playlistName,setPlaylistName] = useState('')
    function handleCreatePlaylist(){
        const token = getCookie('token')
        try{
            fetch('http://localhost:5000/api/v1/user/create-playlist',{
                method:"POST",
                headers:{
                    'content-type':'application/json',
                    'authorization':`Bearer ${token}`
                },
                body:JSON.stringify({name:playlistName})
            })
        }
        catch(error){
            console.error(error)
        }

    }
    useEffect(()=>{
        // here cancel the request 
    },[])
    return(
        <div className="">
            <h4 className="text-center font-bold text-gray-700">Create playlist</h4>
            <br/>
            <div className="flex flex-col gap-y-2">
                <div>
                    <label className="text-sm text-gray-600 font-semibold">Playlist name</label>
                    <br/>
                    <input 
                    value={playlistName}
                    onChange={(e)=>{
                        setPlaylistName(e.currentTarget.value)
                    }}
                    className="p-1 text-sm text-gray-700 border rounded" />
                </div>
                <div className="inline-flex text-white text-xs justify-end w-100 gap-x-2">
                    <button 
                    onClick={closeModal}
                    className="bg-gray-400 hover:bg-gray-500 rounded px-2 py-1">Cancel</button>
                    <button 
                    onClick={handleCreatePlaylist}
                    className="bg-blue-400 hover:bg-blue-500 rounded px-2 py-1">Create</button>
                </div>
            </div>
        </div>
    )
}


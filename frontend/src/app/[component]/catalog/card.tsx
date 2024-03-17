import { BsThreeDots } from "react-icons/bs";
import { IoShuffleOutline } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { MdAlbum } from "react-icons/md";
import { IoRepeat } from "react-icons/io5";
import { MdPersonSearch } from "react-icons/md";
import { IoIosMusicalNote } from "react-icons/io";


interface musicCardProps {
    id:string
    name:string
    artists:string[]
    isPlaying:boolean
    coverImage:string
}
export default function Card(){
    return(
        <div className="text-sm w-80 flex-1" >
            <div className="border bg-white hover:bg-gray-100 inline-flex items-center justify-between w-full cursor-pointer rounded-md p-2">
                {/* cover image */}
                <div className="inline-flex items-center gap-x-2">
                    <div>
                        <IoIosMusicalNote size={20}/>
                    </div>
                    <div>
                    <span>
                        the day i died
                    </span>
                    <br/>
                    <span> the bootleg boy, Rxseboy, powfu</span>
                    </div>
                </div>
                <div className="relative">
                    <button className="rounded-full hover:bg-gray-300 p-1">
                        <BsThreeDots/>
                    </button>
                    <MusicCardMenu/>
                </div>
            </div>
        </div>
    )
}

function MusicCardMenu(){
    return(
        <div className="w-44 text-xs rounded-md flex flex-col gap-y-2 bg-white border absolute p-2">
            <button className="hover:bg-gray-200 rounded-md px-2 py-1 gap-x-2 inline-flex items-center"><IoIosAddCircle/> Add to playlist</button>
            <button className="hover:bg-gray-200 rounded-md px-2 py-1 gap-x-2 inline-flex items-center"><IoShuffleOutline/> Shuffle</button>
            <button className="hover:bg-gray-200 rounded-md px-2 py-1 gap-x-2 inline-flex items-center"><IoRepeat/> Repeat</button>
            <button className="hover:bg-gray-200 rounded-md px-2 py-1 gap-x-2 inline-flex items-center"><MdAlbum/> View Album</button>
            <button className="hover:bg-gray-200 rounded-md px-2 py-1 gap-x-2 inline-flex items-center"><MdPersonSearch/> View artist</button>
        </div>
    )
}
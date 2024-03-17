import Link from "next/link";
import { IoMdPerson } from "react-icons/io";
export default function Profile(){
    return(
        <Link className="rounded-full bg-gray-200 hover:bg-gray-300 p-1" href="/profile">
            <IoMdPerson size={20}/>
        </Link>
    )
}
import Profile from "./profile";
import SearchBox from "./search-box";
import Signin from "./components/signin";
import {getServerSession} from 'next-auth'
export default async function Navbar(){
    const session = await getServerSession()
    return(
        <nav
        className="z-50 fixed inline-flex items-center gap-x-2 flex">
            {
                session ? <Profile/>: <Signin/>
            }
            <SearchBox/>
        </nav>
    )
}


import Menu from "./menu";
import Profile from "./profile";
import SearchBox from "./search-box";
import Signin from "./components/signin";
import {getServerSession} from 'next-auth'
import Signout from "./components/signout";
export default async function Navbar(){
    const session = await getServerSession()
    console.log(session)
    return(
        <nav
        className="z-50 fixed inline-flex items-center gap-x-2 flex">
            <Profile/>
            <SearchBox/>
            {
                session ? <Signout/> : <Signin/>
            }
            <Menu/>
        </nav>
    )
}


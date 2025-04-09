import { Outlet } from "react-router";
import MainNav from "./MainNav";

export default function RootLaylout(){


    return (<>
    <MainNav/>
    <main>
        <Outlet/>
    </main>
    </>
        
    )
}


import Header from "./components/Header/Header";
import Downer from "./components/Downer/Downer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>                 
            <Header />          {/*This is permanent*/}
                <Outlet />     {/*This is injection- Child routes will be rendered here*/}
            <Downer />          {/*This is permanent*/}
        </>
    )
}

export default Layout;
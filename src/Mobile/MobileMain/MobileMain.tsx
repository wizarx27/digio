import { Outlet } from "react-router-dom"

const MobileMain = ()=>{
    return(
        <div>
            Sidebar
            <Outlet />
        </div>
    )
}

export default MobileMain
import { Row } from "react-bootstrap"
import "./Sidebar.scss"
import { Link } from "react-router-dom"
import { useWindowSize } from "../../../hooks"
const Sidebar = ()=>{
    const [width,height] = useWindowSize()

    return(
        <div className="sidebar-cont" style={{minHeight:height}}>
            <div className="ps-3">
                <h3>Digio</h3>
                <div className="d-flex flex-column">
                    <div className="mb-2"><Link to={"/dashboard"} style={{textDecoration:"none",color:"black"}}>Dashboard</Link></div>
                    <div className="mb-2"><Link to={"/menu"} style={{textDecoration:"none",color:"black"}}>Menu</Link></div>
                    <div className="mb-2"><Link to={"/orders"} style={{textDecoration:"none",color:"black"}}>Orders</Link></div>
                    <div className="mb-2">Report</div>
                    <div className="mb-2">Settings</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
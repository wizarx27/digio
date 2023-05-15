import { Row } from "react-bootstrap"
import "./Sidebar.scss"
const Sidebar = ()=>{
    return(
        <div className="h-100 sidebar-cont">
            <div className="ps-3">
                <h3>Digio</h3>
                <div className="d-flex flex-column">
                    <div className="mb-2">Dashboard</div>
                    <div className="mb-2">Menu</div>
                    <div className="mb-2">Orders</div>
                    <div className="mb-2">Report</div>
                    <div className="mb-2">Settings</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
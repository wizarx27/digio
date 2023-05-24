import { Card, Col, Container, Dropdown, Nav, NavDropdown, Navbar, Row } from "react-bootstrap"

import "./Dashboard.scss"
import { forwardRef } from "react"
import DropDownThreeDot from "./component/ThreeDot/ThreeDot"






const Dashboard = ()=>{
    return(
        <div className="d-inline-block dashboard-container">
            <div className="w-100 d-flex">
                <Col xxl={7} xl={7} md={7} lg={7} className="p-0 d-flex flex-column me-2">
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between">
                                <div>TOTAL ORDERS</div>
                                <div>Details</div>
                            </Card.Title>
                            <Card.Text className="d-flex justify-content-between">
                                <span>TODAY:</span>
                                <span>THIS WEEK: </span>
                                <span>THIS MONTH: </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between">
                                <div>TOP MENU</div>
                                <div>VIEW ALL</div>
                            </Card.Title>
                            <Card.Text className="d-flex">
                                <Card style={{width:"200px",height:"200px"}} className="me-2">

                                </Card>
                                <Card style={{width:"200px",height:"200px"}} className="me-2">

                                </Card>
                                <Card style={{width:"200px",height:"200px"}} className="me-2">

                                </Card>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Sales Summary</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5} xl={5} md={5} lg={5} className="p-0 d-flex flex-column">
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between">
                                <div>RECENT ORDERS</div>
                                <div>VIEW ALL</div>
                            </Card.Title>
                            <Card.Text>
                                    <Card className="table-recent">
                                        <Card.Body className="d-flex w-100 align-items-center p-2">
                                            <div className="flex-grow-1">TABEL#123123</div>
                                            <div className="table-status">PENDING</div>
                                            <Dropdown>
                                                <Dropdown.Toggle as={DropDownThreeDot("mb-1")}>
                                                    
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu >
                                                    <Dropdown.Item href="#/action-1">Open</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Preview</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Card.Body>
                                    </Card>
                                    
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Text className="d-flex flex-column">
                                <div className="d-flex">
                                    <img src="https://placehold.co/200x200" alt="" style={{borderRadius:"50%"}}/>
                                    <div className="d-flex flex-column widget-total-menu">
                                        <div className="total-menu-header">Total Menu</div>
                                        <div className="total-menu-count">50</div>
                                    </div>
                                </div>
                                <div className="edit-menu-link">Edit Menu</div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Text className="d-flex flex-column">
                                <div className="d-flex">
                                    <img src="https://placehold.co/200x200" alt="" style={{borderRadius:"50%"}} className="me-2"/>
                                    <div className="d-flex flex-column widget-income">
                                        <div className="widget-income-header">Income</div>
                                        <div className="widget-income-count">IDR. 123.000.000</div>
                                    </div>
                                </div>
                                <div className="view-detail-income-link">Details</div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    )
}

export default Dashboard
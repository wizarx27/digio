import { Card, Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap"
import "./Dashboard.scss"
const Dashboard = ()=>{
    return(
        <div className="d-inline-block dashboard-container">
            <div className="w-100 d-flex">
                <Col xxl={7} xl={7} md={7} lg={7} className="p-0 d-flex flex-column me-2">
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Total Orders</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Top Menu</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Sales Summary</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5} xl={5} md={5} lg={5} className="p-0 d-flex flex-column">
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Recent Orders</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Total Menu</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Income</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    )
}

export default Dashboard
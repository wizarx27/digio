import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import "./NavbarWrapper.scss"
const NavbarWrapper = ()=>{
    return(
        <Navbar className="navbar-custom">
            <Container>
                <Nav className="ms-auto">
                    <div className="username-info-box p-2">
                        <div></div>
                        <div className="username-info">Javier Paulus</div>
                    </div>
                </Nav>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    )
}

export default NavbarWrapper
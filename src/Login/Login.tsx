import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import "./Login.scss"
import login_img from "../assets/image/Login_img.png"
import { useNavigate } from "react-router-dom"
import { useWindowSize } from "../hooks"

const Login = ()=>{
    const [width, height] = useWindowSize();
    const navigate = useNavigate()
    return(
        <div className="login-bg-image" style={{minHeight:height*1.1}}>
            <Container className="root-in">
                <Row className="login-box">
                    <Col xl={6} xxl={6} md={6} className="p-0">
                        <img src={login_img} alt="" className="w-100"/>
                    </Col>
                    <Col xl={6} xxl={6} md={6} className="d-flex justify-content-center flex-column">
                        <div >
                            <label htmlFor="" className="login-label">STAFF ID</label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Username"
                                />
                            </InputGroup>
                            <label htmlFor="" className="login-label">PASSWORD</label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Password"
                                    type="password"
                                />
                            </InputGroup>
                        </div>
                        <Button className="w-100" onClick={()=>navigate("/dashboard")}>Login</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
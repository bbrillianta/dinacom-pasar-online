import React, { useState } from 'react';
import { Row, Col, Container, Image, Form, Button, div} from 'react-bootstrap';
import { useHistory } from 'react-router';
import gambar from '../asset/DosarLogo.png';
import sideimage from '../asset/quote1.jpg'
import '../css/LoginPage.css';


const RegisterPage = (props) => {
    const history = useHistory();
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [pesan, setPesan] = useState(null);

    function submitregister(e){
        e.preventDefault();
        fetch('http://localhost:3001/register', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({username, email, password, confirm})
        })
        .then(response => response.json())
        .then(data => { 
            if(!data.success) return setPesan(data.message);

            props.setAuth(data.success);
            props.setUser(data.userSession);
            return history.push('/');
        })        
        }

    return (
        <Container fluid>
        <Row>
            <Col  className="d-flex flex-column align-items-center justify-content-around">
            <a href="/"><Image src={ gambar } width="234" height="72" className="mt-5" /></a>
                <div className="d-flex flex-column align-items-center mt-3" style={{ color: "red" }}>
                    { pesan }
                </div>
                <Form onSubmit={submitregister} method="post" className="d-flex flex-column align-items-center form-login">
                    <Form.Group controlId="formBasicUsername" className="w-100">
                        <Form.Label className="ml-3 label-account">USERNAME</Form.Label>
                        <Form.Control className="login-field" onChange={e => setUsername(e.target.value)} type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="w-100">
                        <Form.Label className="ml-3">EMAIL</Form.Label>
                        <Form.Control className="login-field" onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="w-100">
                        <Form.Label className="ml-3">PASSWORD</Form.Label>
                        <Form.Control className="login-field" onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicVPassword" className="w-100">
                        <Form.Label className="ml-3">VERIFY PASSWORD</Form.Label>
                        <Form.Control className="login-field" onChange={e => setConfirm(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="ijo" type="submit" className="mt-4" >REGISTER</Button>
                </Form>
                <p>Sudah mempunyai akun? <a href="/login" style={{ color: "#529F1F" }}><b>Login</b></a></p>
            </Col>
            <Col className="side-img">
                <Image src={ sideimage } style={{ width: "50vw", height: "100vh" }}/>
            </Col>
        </Row>
        </Container>
    );
};

export default RegisterPage;
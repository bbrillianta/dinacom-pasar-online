import React, { useState } from 'react';
import { Row, Col, Container, Image, Form, Button, div} from 'react-bootstrap';
import gambar from '../asset/DosarLogo.png';
import sideimage from '../asset/quote1.jpg'
import '../css/LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function submitlogin(e){
        e.preventDefault();
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({email, password})
        }).then(response => response.json()).then(data => console.log(data))        
        }
    return (
        <Container fluid>
        <Row>
            <Col className="d-flex flex-column align-items-center justify-content-around">
                <Image src={ gambar } width="234" height="72" className="mt-5" />
                <div className="d-flex flex-column align-items-center mt-3">
                    <h4><b>HELLO!</b></h4>
                    <p>Ayo login ke akunmu!</p>
                </div>
                <Form onSubmit={submitlogin} method="post" className="d-flex flex-column align-items-center form-login">
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="login-field" onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="login-field" onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="button1" type="submit" className="mt-4" >LOGIN</Button>
                </Form>
                <p>Belum mempunyai akun? <a href="/register" style={{ color: "#529F1F" }}><b>Register</b></a></p>
            </Col>
            <Col className="side-img">
                <Image src={ sideimage } style={{ width: "50vw", height: "100vh" }}/>
            </Col>
        </Row>
        </Container>
    );
};

export default LoginPage;
import React, { useState } from 'react';
import { Row, Col, Container, Image, Form, Button, div} from 'react-bootstrap';
import gambar from '../asset/DosarLogo.png';
import sideimage from '../asset/quote1.jpg'
import '../css/LoginPage.css';


const RegisterPage = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirm, setConfirm] = useState();
    const [pesan, setPesan] = useState();

    function submitregister(e){
        e.preventDefault();
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({username, email, password, confirm})
        }).then(response => response.json()).then(data => { if(data.success==false) setPesan(data.message)})        
        }

    return (
        <Container fluid>
        <Row>
            <Col  className="d-flex flex-column align-items-center justify-content-around">
                <Image src={ gambar } width="234" height="72" className="mt-5" />
                <div className="d-flex flex-column align-items-center mt-3">
                    
                </div>
                <Form onSubmit={submitregister} method="post" className="d-flex flex-column align-items-center form-login">
                    <Form.Group controlId="formBasicUsername" >
                        <Form.Label>USERNAME</Form.Label>
                        <Form.Control className="login-field" onChange={e => setUsername(e.target.value)} type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control className="login-field" onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control className="login-field" onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicVPassword">
                        <Form.Label>VERIFY PASSWORD</Form.Label>
                        <Form.Control className="login-field" onChange={e => setConfirm(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="button1" type="submit" className="mt-4" >REGISTER</Button>
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
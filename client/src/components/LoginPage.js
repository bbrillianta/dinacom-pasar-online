import React, { useState } from 'react';
import { Row, Col, Container, Image, Form, Button, div} from 'react-bootstrap';
import { useHistory } from 'react-router';
import gambar from '../asset/DosarLogo.png';
import sideimage from '../asset/quote1.jpg'
import '../css/LoginPage.css';

const LoginPage = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();

    function submitlogin(e){
        e.preventDefault();
        fetch('http://localhost:3001/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(data => {
            if(!data.success) return setErrorMessage(data.message)
            
            props.setAuth(data.success);
            props.setUser(data.userSession);
            history.push('/');
        });      
    }

    return (
        <Container fluid>
        <Row>
            <Col className="d-flex flex-column align-items-center justify-content-around">
                <a href="/"><Image src={ gambar } width="234" height="72" className="mt-5" /></a>
                {errorMessage 
                    ?   <p className="mt-1" style={{ color: "red" }}>{ errorMessage }</p> 
                    :   <div className="d-flex flex-column align-items-center mt-3">
                            <h4><b>HELLO</b></h4>
                            <p>Ayo login ke akunmu!</p>
                        </div>
                }
                
                <Form onSubmit={submitlogin} method="post" className="d-flex flex-column align-items-center form-login">
                    <Form.Group controlId="formBasicEmail" className="w-100">
                        <Form.Label className="ml-3">Email</Form.Label>
                        <Form.Control className="login-field" onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword"  className="w-100">
                        <Form.Label className="ml-3">Password</Form.Label>
                        <Form.Control className="login-field" onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button variant="ijo" type="submit" style={{ width: "150px", borderRadius: "0" }} className="mt-4" >LOGIN</Button>
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
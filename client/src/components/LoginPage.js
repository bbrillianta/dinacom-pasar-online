import React, { useState } from 'react';
import { Row, Col, Container, Image, Form, Button, div} from 'react-bootstrap';
import gambar from '../asset/quote1.jpg';
import '../cek.css';

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
        <Container>
        <Row>
            <Col>
            <div className="kiri">
            <div className="kirilogin">
                <div className="logologin">
                    <Image src="https://s1.bukalapak.com/img/13964212711/large/Jual_Vinyl_Lantai_Motif_Polos_Vinyl_Meteran_Warna_Hitam.jpg" roundedCircle width="80" height="80px" />
                </div>
                <div className="namelogin"><h5><b>NAMA BRAND</b></h5></div>
                <div className="halologin">
                    <b>HELLO!</b>
                    <br></br>
                    Please Login to Your Account!
                </div>
                <div className="formlogin">
                    <Form onSubmit={submitlogin} method="post">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="buttonlogin">
                        <Button variant="button1" type="submit" >LOGIN</Button>
                        <a href="/register">Register</a>
                        </div>
                    </Form>
                </div>
            </div>
            </div>
            </Col>
            <Col>
                <div className="kanan">
                     <Image className="imgloginsam" src={gambar} />
                </div>
            </Col>
        </Row>
        
        {/* <div className="nofull">
            
        </div>  */}
        </Container>
    );
};

export default LoginPage;
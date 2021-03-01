import React, { useState } from 'react';
import { Row, Col, Container, Image, Form, Button, div} from 'react-bootstrap';
import gambar from '../asset/quote1.jpg';
import '../cek.css';

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
                    Create an account
                </div>
                <div className="formregister">
                    <Form onSubmit={submitregister} method="post">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>USERNAME</Form.Label>
                            <Form.Control onChange={e => setUsername(e.target.value)} type="text" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>EMAIL</Form.Label>
                            <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>PASSWORD</Form.Label>
                            <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>VERIFY PASSWORD</Form.Label>
                            <Form.Control onChange={e => setConfirm(e.target.value)} type="password" placeholder="Confirm password" />
                        </Form.Group>

                        <div className="buttonlogin">
                        <Button variant="button1" type="submit" >REGISTER</Button>
                        {pesan && <p>{pesan}</p>}
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

export default RegisterPage;
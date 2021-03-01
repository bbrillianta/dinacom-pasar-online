import React from 'react';
import { Carousel, Form, Navbar, Nav, FormControl, NavDropdown, InputGroup, Button, Image } from 'react-bootstrap';
import gambar from '../asset/DosarLogo.png';
import gambartas from '../asset/shopping-bag-icon.png';
import mega from '../asset/mega1.jpg';
import '../cek.css';

const NavbarPage = () => {
    return (
        //navbar
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="navbrand" href="home">
                <img
                    src={gambar}
                    width="100vh"
                    className="d-inline-block align-top"
                    alt="DOSAR"
                />
            </Navbar.Brand>
            <Navbar.Toggle className="navtoggle" aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <InputGroup className="homesearch">
                    <FormControl
                        placeholder="Cari belanjaan"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        style={{ borderColor: "#529F1F" }}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-success">SEARCH</Button>
                    </InputGroup.Append>
                </InputGroup>

                <Nav className="nav2">
                    <a>Keranjang</a>
                    <br></br>
                    <a>Akun</a>
                </Nav>

                <Nav className="mr-auto nav1">
                    <img
                        className="gambartas"
                        src={gambartas}
                        width="30vh"
                        className="d-inline-block align-top"
                        alt="DOSAR"
                    />
                    <div className="kantongtext">
                        <div className="kantongtexta">Kantong Belanja</div>
                        <div className="kantongtexta2">3 Barang</div>
                    </div>

                    <div className="homeuserfoto">
                        <Image className="userimage" src={mega} roundedCircle />
                    </div>
                    <div className="homeusernama">Mega Darta</div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarPage;
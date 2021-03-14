import React, { useState } from 'react';
import { Carousel, Form, Navbar, Nav, FormControl, NavDropdown, InputGroup, Button, Image } from 'react-bootstrap';
import gambar from '../asset/DosarLogo.png';
import gambartas from '../asset/shopping-bag-icon.png';
import mega from '../asset/user.svg';
import '../css/Navbar.css';
import { Redirect } from 'react-router';
import { SERVER_HOST } from '../config.js';


const NavbarPage = (props) => {
    const [search, setSearch] = useState();

    const logout = () => {
        fetch(`${SERVER_HOST}/logout`, { 
            method: 'DELETE',
            credentials: 'include' 
        });
    }

    const cartItems = () => {
        const { carts } = props.user;
        return carts.length;
    }

    const searching = (e) => {
        e.preventDefault();
        console.log(encodeURI(search));
    }

    return (
        <Navbar className="p-3 dosar-nav" bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="/" className="">
                <img
                    src={gambar}
                    width="150"
                    className="d-inline-block align-top mx-2"
                    alt="DOSAR"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className=" mx-auto" onSubmit={searching}>
                    <FormControl type="text" placeholder="Search" className="searchtxt searchbar" onChange={(e) => setSearch(e.target.value)}/>
                    <Button type="submit" className="searchbtn searchbar">Search</Button>
                </Form>
                
                    {   
                        props.fetched
                        ?   props.auth

                            ?   <Nav className="mx-auto">
                                    <Nav.Link href="/cart" className="d-flex align-items-center mr-5">
                                        <img
                                            src={gambartas}
                                            width="30px"
                                            height="35px"
                                            className="d-inline-block align-top"
                                            alt="DOSAR"
                                        />
                                        <a className="ml-2" style={{ position: "relative" }}>
                                            <p className="m-0" style={{ fontSize: "12px", color: "#529F1F" }}><b>Kantong Belanja</b></p>
                                            <div className="d-flex justify-content-center align-items-center" style={{ 
                                                position: "absolute", 
                                                left: "-20px",
                                                top: "15px",
                                                backgroundColor: "red",
                                                borderRadius: "20px",
                                                color: "white",
                                                width: "24px"
                                            }}>
                                                <small >{ cartItems() }</small>
                                            </div> 
                                        </a>
                                    </Nav.Link>
                                    <NavDropdown title=
                                            { <Image width="35" src={mega} roundedCircle style={{ border: "2px solid #529F1F"}} /> }
                                            id="basic-nav-dropdown">
                                        <NavDropdown.Item >{ props.user.username }</NavDropdown.Item>
                                        <NavDropdown.Item href="/transactions">Riwayat Transaksi</NavDropdown.Item>
                                        <NavDropdown.Item href="/" onClick={logout}>Logout</NavDropdown.Item>
                                        {/* <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item> */}
                                    </NavDropdown>
                                </Nav>
                            :   <Nav className="mx-auto">
                                    <Nav.Link href="/login" className="mr-4">
                                        <Button variant="ijo-outline" style={{width: "90px"}}>Login</Button>
                                    </Nav.Link>
                                    <Nav.Link href="/register"><Button variant="ijo">Register</Button></Nav.Link>
                                </Nav>
                        : <div style={{width: "269.33px"}} className="mx-auto"></div>
                    }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarPage;
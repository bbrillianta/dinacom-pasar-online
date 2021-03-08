import React, { useState } from 'react';
import { Row, Col, Container, Image, Form, Button, div, InputGroup, FormControl, Card, CardDeck } from 'react-bootstrap';
import tomat from '../asset/tomat.jpg'
import '../css/ProdukPage.css';
import mega from '../asset/mega1.jpg';
import gambartas from '../asset/bag.png';
import sayur from '../asset/KategoriSayur2.png';
import apel from '../asset/gambar-apel-hijau-1.jpg';
import sawi from '../asset/Caisim-003_stokpangan.com_.jpg';
import wortel from '../asset/wortel-import-fp.jpg'
import strawberry from '../asset/product-packshot-strawberrie-558x600.jpg';
import alpukat from '../asset/Alpukat-Muda.jpg';

const ProdukPage = () => {
    return (
        <Container>
            <Row className="justify-content-md-center produk mt-5">
                <Col lg="6">
                    <img src={tomat} className="fotoproduk"></img>
                </Col>
                <Col lg="6">
                    <div className="bawah">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column">
                                <h3 className="mb-0"><b>Tomat Merah</b></h3>
                                <p>1 kg</p>
                            </div>
                            <Image width="50" height="50" src={mega} roundedCircle />
                        </div>
                        <p className="mt-4"><b style={{fontSize: "30px"}}>Rp. 27.200</b>/kg</p>
                        <p>Kuantitas</p>
                        <Row className="mb-4">
                            <Col md="5" className="plusminus">
                                <InputGroup>
                                    <Button variant="outline-danger">-</Button>
                                    <FormControl className="text-center mx-3"
                                        placeholder="1"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-success">+</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            <Col md="7" className="text10 pl-5">
                                <small>Sub Total</small>
                                <h5 className="m-0"><b>Rp. 81.600</b></h5>
                            </Col>
                        </Row>
                        <div className="d-flex">
                            <Button variant="success"style={{ width: "500px" }}><img src={gambartas} className="img11"></img><text className="text11name">  Masukkan Kantong</text></Button>
                            <InputGroup className="pl-3">
                                <FormControl
                                    placeholder="Tawar produk"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-danger">Tawar</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="produkterkait mt-3">
                <Col md="auto"><b>Produk Terkait</b></Col>
            </Row>

            <Row className="list-produk2">
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={apel} className="produk"/>
                        <Card.Body>
                            <Card.Title>Apel Manalagi</Card.Title>
                            <Card.Text>
                                <b>Rp. 12.000</b>/kg
                            </Card.Text>
                            <Button variant="success" style={{width: "100%"}}>BELI</Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    
                    <Card>
                        <Card.Img variant="top" src={sawi} className="produk"  />
                        <Card.Body>
                            <Card.Title>Apel Manalagi</Card.Title>
                            <Card.Text>
                                <b>Rp. 12.000</b>/kg
                            </Card.Text>
                            <Button variant="success" style={{width: "100%"}}>BELI</Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={wortel} className="produk"  />
                        <Card.Body>
                            <Card.Title>Apel Manalagi</Card.Title>
                            <Card.Text>
                                <b>Rp. 12.000</b>/kg
                            </Card.Text>
                            <Button variant="success" style={{width: "100%"}}>BELI</Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={apel} className="produk"  />
                        <Card.Body>
                            <Card.Title>Apel Manalagi</Card.Title>
                            <Card.Text>
                                <b>Rp. 12.000</b>/kg
                            </Card.Text>
                            <Button variant="success" style={{width: "100%"}}>BELI</Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={alpukat} className="produk"  />
                        <Card.Body>
                            <Card.Title>Apel Manalagi</Card.Title>
                            <Card.Text>
                                <b>Rp. 12.000</b>/kg
                            </Card.Text>
                            <Button variant="success" style={{width: "100%"}}>BELI</Button>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                </CardDeck>
            </Row>

        </Container>
    );
};

export default ProdukPage;
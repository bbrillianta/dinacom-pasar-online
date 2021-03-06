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
            <Row className="justify-content-md-center produk">
                <Col>
                    <img src={tomat} className="fotoproduk"></img>
                </Col>
                <Col>
                    <div className="atas"></div>
                    <div className="bawah">
                        <Row>
                            <Col className="text1"><h3><b>Tomat Merah</b></h3></Col>
                            <Col className="foto"><Image className="userimage" src={mega} roundedCircle /></Col>
                        </Row>
                        <Row>
                            <Col className="text2">1 kg</Col>
                        </Row>
                        <Row>
                            <Col className="text5"><text className="text3">Rp. 32.000</text><text className="text4"> (Diskon 15%)</text></Col>
                        </Row>
                        <Row>
                            <Col className="text6"><b>Rp. 27.200</b><a className="text7">/kg</a></Col>
                        </Row>
                        <Row>
                            <Col className="text8">Kuantitas</Col>
                        </Row>
                        <Row style={{ marginTop: "1vh", marginBottom: "2vh" }} >
                            <Col className="plusminus">
                                <InputGroup style={{ width: "20vh" }}>
                                    <Button variant="outline-danger">-</Button>
                                    <FormControl className="text-center"
                                        placeholder="1"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-success">+</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            <Col className="text10">
                                <Row className="text9">Sub Total</Row>
                                <Row><h5><b>Rp. 81.600</b></h5></Row>
                            </Col>
                        </Row>
                        <Row className="kantong">
                            <Col className="text11">
                                <Button variant="success"><img src={gambartas} className="img11"></img><text className="text11name">  Masukkan Kantong</text></Button>
                            </Col>
                            <Col className="text12"><InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Tawar produk"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-danger">Tawar</Button>
                                </InputGroup.Append>
                            </InputGroup>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row className="produkterkait">
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
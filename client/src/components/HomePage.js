import React from 'react';
import { Container, Row, Col, CardDeck, Card, Button} from 'react-bootstrap';
import buah from '../asset/KategoriBuah2.png';
import sayur from '../asset/KategoriSayur2.png';
import apel from '../asset/gambar-apel-hijau-1.jpg';
import sawi from '../asset/Caisim-003_stokpangan.com_.jpg';
import wortel from '../asset/wortel-import-fp.jpg'
import strawberry from '../asset/product-packshot-strawberrie-558x600.jpg';
import alpukat from '../asset/Alpukat-Muda.jpg';
import '../cek.css';

const HomePage = () => {
    return (
        <Container>
            <Row className="justify-content-md-center namakategori">
                <Col md="auto"><b>Kategori Belanja</b></Col>
            </Row>
            <Row className="justify-content-md-center">
                <CardDeck>
                    <Card>
                        <a href=""><img className="homekategori" src={buah}></img></a>
                    </Card>
                    <Card>
                        <a href=""><img className="homekategori" src={sayur}></img></a>
                    </Card>
                </CardDeck>
                {/* <Col md="auto" >
                    <img className="homekategori" src={buah}></img>
                </Col>

                <Col md="auto" >
                    <img className="homekategori" src={sayur}></img>
                </Col> */}
            </Row>
            <Row className="namelist">
                <Col><b>Produk Pilihan</b></Col>
            </Row>
            <Row className="list-produk1">
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
            <Row>
                <Col><b>Produk Pilihan</b></Col>
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

export default HomePage;
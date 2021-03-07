import React from 'react';
import { Container, Row, Col, CardDeck, Card, Button, CardColumns} from 'react-bootstrap';
import buah from '../asset/KategoriBuah2.png';
import sayur from '../asset/KategoriSayur2.png';
import apel from '../asset/gambar-apel-hijau-1.jpg';
import sawi from '../asset/Caisim-003_stokpangan.com_.jpg';
import wortel from '../asset/wortel-import-fp.jpg'
import strawberry from '../asset/product-packshot-strawberrie-558x600.jpg';
import alpukat from '../asset/Alpukat-Muda.jpg';
import gambar from '../asset/Iklan.jpg';
import '../css/HomePage.css';

const HomePage = () => {
    return (
        <Container>
            <Row className="justify-content-center namakategori">
                <h4><b>Kategori Belanja</b></h4>
            </Row>
            <Row className="justify-content-center kategoribelanja">
                <a href=""><img className="homekategori mr-2" src={buah}></img></a>
                <a href=""><img className="homekategori ml-2" src={sayur}></img></a>
            </Row>
            <Row className="namelist">
                <h4><b>Produk Terlaris</b></h4>
            </Row>
            
            <Row className="mt-2 justify-content-center">
                <Card className="product">
                    <Card.Img variant="top" src={apel} className="produk"/>
                    <Card.Body>
                        <Card.Title>Apel Manalagi</Card.Title>
                        <Card.Text>
                            <b>Rp. 12.000</b>/kg
                        </Card.Text>
                        <Button variant="success" style={{width: "100%"}}>BELI</Button>
                    </Card.Body>
                </Card>
                <Card className="product">
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
                <Card className="product">
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
                <Card className="product">
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
                <Card className="product">
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
            </Row>

            <Row>
                <h4><b>Produk Pilihan</b></h4>
            </Row>
            <Row className="mt-2">
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

            <Row className="mt-2">
                <Col>
                        <img className="iklan2" src={gambar}></img>
                </Col>
            </Row>

            <Row className="mt-2">
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

            <Row className="mt-2">
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
            <Row className="mb-5">
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
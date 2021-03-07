import React from 'react';
import { Row, Col, Container, Card, CardDeck, Button } from 'react-bootstrap';
import sayur from '../asset/KategoriSayur2.png';
import apel from '../asset/gambar-apel-hijau-1.jpg';
import sawi from '../asset/Caisim-003_stokpangan.com_.jpg';
import wortel from '../asset/wortel-import-fp.jpg'
import strawberry from '../asset/product-packshot-strawberrie-558x600.jpg';
import alpukat from '../asset/Alpukat-Muda.jpg';
import backicon from '../asset/backicon.png';
import '../css/ListPage.css';


const ListPage = () => {
    return (
        <Container>
            <Row className="listatas">
                <Col>
                    <a href="/"><img className="backicon" src={backicon}></img></a>
                </Col>
                <Col><h5><b>Produk Terlaris</b></h5></Col>
            </Row>
            <Row className="list-produk1">
                <CardDeck>

                    <Card>
                        <Card.Img variant="top" src={apel} className="produk" />
                        <Card.Body>
                            <Card.Title>Apel Manalagi<br></br>
                                <text className="namapenjual">Mega</text><br></br>
                            </Card.Title>

                            <Card.Text>
                                <text className="jumlahterjual"><b>1000 terjual</b></text><br></br>
                                <text className="harganormal">Rp. 32.000 </text><text className="diskon">(Diskon 15%)</text><br></br>
                                <b>Rp. 12.000</b>/kg
                            </Card.Text>
                            <Button variant="success" style={{ width: "100%" }}>BELI</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={apel} className="produk" />
                        <Card.Body>
                            <Card.Title>Apel Manalagi<br></br>
                                <text className="namapenjual">Mega</text><br></br>
                            </Card.Title>

                            <Card.Text>
                                <text className="jumlahterjual"><b>1000 terjual</b></text><br></br>
                                <text className="harganormal">Rp. 32.000 </text><text className="diskon">(Diskon 15%)</text><br></br>
                                <b>Rp. 12.000</b>/kg
                            </Card.Text>
                            <Button variant="success" style={{ width: "100%" }}>BELI</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={apel} className="produk" />
                        <Card.Body>
                            <Card.Title>Apel Manalagi<br></br>
                                <text className="namapenjual">Mega</text><br></br>
                            </Card.Title>

                            <Card.Text>
                                <text className="jumlahterjual"><b>1000 terjual</b></text><br></br>
                                <text className="harganormal">Rp. 32.000 </text><text className="diskon">(Diskon 15%)</text><br></br>
                                <b>Rp. 12.000</b>/kg
                            </Card.Text>
                            <Button variant="success" style={{ width: "100%" }}>BELI</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={apel} className="produk" />
                        <Card.Body>
                            <Card.Title>Apel Manalagi<br></br>
                                <text className="namapenjual">Mega</text><br></br>
                            </Card.Title>

                            <Card.Text>
                                <text className="jumlahterjual"><b>1000 terjual</b></text><br></br>
                                <text className="harganormal">Rp. 32.000 </text><text className="diskon">(Diskon 15%)</text><br></br>
                                <b>Rp. 12.000</b>/kg
                            </Card.Text>
                            <Button variant="success" style={{ width: "100%" }}>BELI</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={apel} className="produk" />
                        <Card.Body>
                            <Card.Title>Apel Manalagi<br></br>
                                <text className="namapenjual">Mega</text><br></br>
                            </Card.Title>

                            <Card.Text>
                                <text className="jumlahterjual"><b>1000 terjual</b></text><br></br>
                                <text className="harganormal">Rp. 32.000 </text><text className="diskon">(Diskon 15%)</text><br></br>
                                <b>Rp. 12.000</b>/kg
                            </Card.Text>
                            <Button variant="success" style={{ width: "100%" }}>BELI</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>

            </Row>
            <Row className="list-produk1">
                <CardDeck>

                    <Card>
                        <Card.Img variant="top" src={apel} className="produk" />
                        <Card.Body>
                            <Card.Title>Apel Manalagi<br></br>
                                <text className="namapenjual">Mega</text><br></br>
                            </Card.Title>

                            <Card.Text>
                                <text className="jumlahterjual"><b>1000 terjual</b></text><br></br>
                                <text className="harganormal">Rp. 32.000 </text><text className="diskon">(Diskon 15%)</text><br></br>
                                <b>Rp. 12.000</b>/kg
                           </Card.Text>
                            <Button variant="success" style={{ width: "100%" }}>BELI</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={apel} className="produk" />
                        <Card.Body>
                            <Card.Title>Apel Manalagi<br></br>
                                <text className="namapenjual">Mega</text><br></br>
                            </Card.Title>

                            <Card.Text>
                                <text className="jumlahterjual"><b>1000 terjual</b></text><br></br>
                                <text className="harganormal">Rp. 32.000 </text><text className="diskon">(Diskon 15%)</text><br></br>
                                <b>Rp. 12.000</b>/kg
                           </Card.Text>
                            <Button variant="success" style={{ width: "100%" }}>BELI</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={apel} className="produk" />
                        <Card.Body>
                            <Card.Title>Apel Manalagi<br></br>
                                <text className="namapenjual">Mega</text><br></br>
                            </Card.Title>

                            <Card.Text>
                                <text className="jumlahterjual"><b>1000 terjual</b></text><br></br>
                                <text className="harganormal">Rp. 32.000 </text><text className="diskon">(Diskon 15%)</text><br></br>
                                <b>Rp. 12.000</b>/kg
                           </Card.Text>
                            <Button variant="success" style={{ width: "100%" }}>BELI</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={apel} className="produk" />
                        <Card.Body>
                            <Card.Title>Apel Manalagi<br></br>
                                <text className="namapenjual">Mega</text><br></br>
                            </Card.Title>

                            <Card.Text>
                                <text className="jumlahterjual"><b>1000 terjual</b></text><br></br>
                                <text className="harganormal">Rp. 32.000 </text><text className="diskon">(Diskon 15%)</text><br></br>
                                <b>Rp. 12.000</b>/kg
                           </Card.Text>
                            <Button variant="success" style={{ width: "100%" }}>BELI</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={apel} className="produk" />
                        <Card.Body>
                            <Card.Title>Apel Manalagi<br></br>
                                <text className="namapenjual">Mega</text><br></br>
                            </Card.Title>

                            <Card.Text>
                                <text className="jumlahterjual"><b>1000 terjual</b></text><br></br>
                                <text className="harganormal">Rp. 32.000 </text><text className="diskon">(Diskon 15%)</text><br></br>
                                <b>Rp. 12.000</b>/kg
                           </Card.Text>
                            <Button variant="success" style={{ width: "100%" }}>BELI</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Row>

        </Container>
    );
};

export default ListPage;
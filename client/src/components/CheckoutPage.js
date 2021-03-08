import React from 'react';
import { Col, Container, Row, Image, FormControl, Button, InputGroup } from 'react-bootstrap';
import '../css/CheckoutPage.css';
import backicon from '../asset/backicon.png';
import satu from '../asset/satu.png';
import plus from '../asset/plus.png';
import dua from '../asset/dua.png';
import edit from '../asset/pencil.png';
import hijau from '../asset/hijau.png';
import tiga from '../asset/tiga.png';
import tomat from '../asset/tomat.jpg';
import lingkaran from '../asset/lingkaran.png';

const CheckoutPage = () => {
    return (
        <Container className="checkout-page py-2 px-5" fluid>
            <Row>
                <Col>
                    <div>
                        <img className="backicon" src={backicon}></img>Checkout Belanjaan
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col lg="9">
                    <div className="left-col p-5">
                        <div>
                            <div className="mr-auto textsatu">
                                <Image src={satu} className="d-inline-block align-center satu" roundedCircle />
                                <h6 className="d-inline-block align-center" style={{ marginLeft: "5vh" }}>Alamat Pengiriman</h6>
                            </div>

                            <div className="kotaksatu d-flex justify-content-start justify-content-center">
                                <div className="d-inline-block kotaksatu1 mr-auto">
                                    <div className="d-inline-block">
                                        <div className="namatujuan"><h5><b>Mega Darta</b></h5></div>
                                        <div className="alamattujuan">Jl. Raya  Ds Takeranklating Kec Tikung Kabupaten Lamongan</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mr-auto textsatu">
                            <Image src={dua} className="d-inline-block align-center satu" roundedCircle />
                            <h6 className="d-inline-block align-center" style={{ marginLeft: "5vh" }}>Total Pesanan</h6>
                        </div>
                        <div className="kotakdua">
                            <div>
                                <div className="kotakdua1">
                                    <Row>
                                        <Col md="3"><img src={tomat} className="gambarprodukco"></img></Col>
                                        <Col md="9">
                                            <Row>
                                                <Col><b>Tomat Merah Besar</b></Col>
                                            </Row>
                                            <Row style={{ marginTop: "1vh" }}>
                                                <Col><b>Rp. 27.200</b></Col>
                                                <Col>Rp. 32.200</Col>
                                                <Col>(Diskon 15%)</Col>
                                            </Row>
                                            <Row style={{ marginTop: "1vh", marginBottom: "2vh"}}>
                                                <Col>
                                                    <InputGroup style={{width: "20vh"}}>
                                                        <Button variant="outline-danger">-</Button>
                                                        <FormControl className="text-center"
                                                           placeholder="1"
                                                        />
                                                        <InputGroup.Append>
                                                            <Button variant="outline-secondary">+</Button>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                  </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="kotakdua1" style={{marginTop: "10vh"}}>
                                    <Row>
                                        <Col md="3"><img src={tomat} className="gambarprodukco"></img></Col>
                                        <Col md="9">
                                            <Row>
                                                <Col><b>Tomat Merah Besar</b></Col>
                                            </Row>
                                            <Row style={{ marginTop: "1vh" }}>
                                                <Col><b>Rp. 27.200</b></Col>
                                                <Col>Rp. 32.200</Col>
                                                <Col>(Diskon 15%)</Col>
                                            </Row>
                                            <Row style={{ marginTop: "1vh", marginBottom: "2vh"}}>
                                                <Col>
                                                    <InputGroup style={{width: "20vh"}}>
                                                        <Button variant="outline-danger">-</Button>
                                                        <FormControl className="text-center"
                                                           placeholder="1"
                                                        />
                                                        <InputGroup.Append>
                                                            <Button variant="outline-secondary">+</Button>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                  </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div className="mr-auto textsatu">
                            <Image src={tiga} className="d-inline-block align-center satu" roundedCircle />
                            <h6 className="d-inline-block align-center" style={{ marginLeft: "5vh" }}>Metode Pembayaran</h6>
                        </div>
                        <div className="kotaktiga">
                            <Row>
                                <Col style={{ marginLeft: "80px", padding: "0" }}>
                                    <input type="radio" name="pembayaran"></input>
                                    {/* <Image src={hijau} className="d-inline-block align-center dua" roundedCircle />  */}
                                    <h6 className="d-inline-block align-center ml-1">Bayar di tempat</h6>
                                </Col>
                                <Col>
                                    <input type="radio" name="pembayaran"></input>
                                    {/* <Image src={lingkaran} className="d-inline-block align-center dua" roundedCircle /> */}
                                    <h6 className="d-inline-block align-center ml-1">Kartu Kredit</h6>
                                </Col>
                                <Col>
                                    <input type="radio" name="pembayaran"></input>
                                    <h6 className="d-inline-block align-center ml-1">M-Banking</h6>
                                </Col>
                            </Row>
                            <Row>
                            <div className="d-inline-block kotaktiga1 mr-auto">
                                    <div className="d-inline-block">
                                        <div className="namatujuan"><h5><b>Mega Darta</b></h5></div>
                                        <div className="alamattujuan">Jl. Raya  Ds Takeranklating Kec Tikung Kabupaten Lamongan</div>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col lg="3">
                    <div className="right-col p-4">
                        <strong>Detail Pesanan</strong>
                        <hr></hr>
                        <hr></hr>
                        <h6> Total Pembayaran</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CheckoutPage;
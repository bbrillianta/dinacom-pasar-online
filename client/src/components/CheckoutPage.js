import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Image, FormControl, Button, InputGroup, Modal, Form } from 'react-bootstrap';
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
import cash from '../asset/cash.svg'
import { rupiah, SERVER_HOST } from '../config';
import { useHistory } from 'react-router';

const CheckoutPage = (props) => {
    const [alamatInput, setAlamatInput] = useState(false);
    const [showAlamat, setShowAlamat] = useState(false);
    const [alamat, setAlamat] = useState({
        name: '',
        number: '',
        address: '',
    });
    const [pembayaran, setPembayaran] = useState("Tunai");
    const history = useHistory();

    const getTotalPrice = (props) => {
        const { carts } = props.user;
        let valid = carts.filter(item => item.status === 1);

        let total = 0;
        for(let i = 0; i < valid.length; i++) {
            total += valid[i].product.price * valid[i].quantity;
        }

        return total;
    }

    const handleClose = () => setAlamatInput(false);
    const handleShow = () => setAlamatInput(true);

    const submitAlamat = (e) => { 
        e.preventDefault();
        setAlamatInput(false);
        setShowAlamat(true);
    }

    const buy = () => {
        if(alamat.name === '') return; 

        const date = new Date();

        const request = {
            userID: props.user._id,
            name: alamat.name,
            address: alamat.address,
            phone: alamat.number,
            carts: props.user.carts,
            totalPrice: getTotalPrice(props),
            paidVia: pembayaran,
            boughtDate: date.toLocaleDateString('ID')
        }
        
        fetch(`${SERVER_HOST}/add-transaction`, { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        .then(res => res.json())
        .then(data => { 
            console.log(data);
            // props.setUser(data.userSession);
            history.push('/');
            props.setShowBoughtSuccess(true);  
        })
    }

    return (
        <Container className="checkout-page py-2 px-5" style={{ minHeight: "100vh" }} fluid>
            <Row>
                <Col>
                    <div className="d-flex align-items-center"> 
                        <a href="/cart"><img width="30" src={backicon}></img></a>
                        <div className="ml-2">Keranjang Belanjaan</div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col lg="9">
                    <div className="left-col p-5">
                        <div>
                            <div className="">
                                <Image src={satu} className="d-inline-block align-center satu" roundedCircle />
                                <h6 className="d-inline-block ml-4">Alamat Pengiriman</h6>
                            </div>

                            <div className="kotaksatu d-flex" >
                                
                                { showAlamat 
                                    ?       <div className="ml-5 my-3 p-3 kotaksatu1">
                                                <div className="">
                                                    <div className="d-flex justify-content-between">
                                                        <h5><b>{alamat.name}</b></h5>
                                                        <a href="#" onClick={handleShow} className="ml-5">Edit</a>
                                                    </div>
                                                    <div >{ alamat.address }</div>
                                                </div>
                                            </div>

                                    :       <a href="#" className="ml-5 my-3 kotakalamat p-3" onClick={handleShow}>
                                                <div className="d-flex flex-column align-items-center">
                                                    <a className="btn btn-alamat rounded-circle px-3 mb-3"><h1 className="m-0">+</h1></a>
                                                    <div>Tambahkan alamat</div>
                                                </div>
                                            </a>
                                }
                                
                            </div>

                        </div>
                        <div className="mr-auto textsatu">
                            <Image src={dua} className="d-inline-block align-center satu" roundedCircle />
                            <h6 className="d-inline-block align-center ml-4">Total Pesanan</h6>
                        </div>
                        <div className="kotakdua">
                            <div>
                                {
                                    props.user.carts.map((item, index) => 
                                        <div className="kotakdua1" className={item.status !==1 && 'd-none'}>
                                            <div className="d-flex ml-5 py-3">
                                                <img src={`${SERVER_HOST}/${item.product.img.path}.jpg`} width="120" height="83" style={{ objectFit: "cover" }}></img>
                                                <div className="d-flex flex-column justify-content-center ml-4">
                                                    <div><b>{item.product.name}</b></div>
                                                    <small className="my-1"><b>Jumlah: {item.quantity} kg</b></small>
                                                    <h5><b>Rp{ rupiah(item.product.price * item.quantity) }</b></h5>
                                                </div>
                                            </div>
                                        </div>  
                                    )
                                }
                            </div>
                        </div>
                        <div className="mr-auto textsatu">
                            <Image src={tiga} className="d-inline-block align-center satu" roundedCircle />
                            <h6 className="d-inline-block align-center ml-4">Metode Pembayaran</h6>
                        </div>
                        <div className="kotaktiga">
                            <Row className="ml-5 ">
                                {['radio'].map((type) => (
                                    <div key={`custom-inline-${type}`} className="mb-3">
                                    <Form.Check
                                        custom
                                        inline
                                        label="Bayar Ditempat"
                                        type={type}
                                        name="pembayaran"
                                        id={`custom-inline-${type}-1`}
                                        checked={ pembayaran === "Tunai" ? true : false }
                                        onChange={() => setPembayaran("Tunai")}
                                    />
                                    <Form.Check
                                        custom
                                        inline
                                        label="Kartu Kredit"
                                        type={type}
                                        name="pembayaran"
                                        id={`custom-inline-${type}-2`}
                                        onChange={() => setPembayaran("Kredit")}
                                    />
                                    <Form.Check
                                        custom
                                        inline
                                        name="pembayaran"
                                        label="M-Banking"
                                        type={type}
                                        id={`custom-inline-${type}-3`}
                                        onChange={() => setPembayaran("M-Banking")}
                                    />
                                    </div>
                                ))}
                            </Row>
                            
                            {/* Bayar ditempat */
                            pembayaran === "Tunai" &&
                            <Row className="ml-5">
                                <div className="kotaktiga1">
                                    <div className="p-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <img src={cash} width="50"></img>
                                            <b className="ml-3">BAYAR DITEMPAT</b>
                                        </div>
                                        <div>Siapkan sejumlah uang sesuai total pembayaran yang diterima</div>
                                    </div>
                                </div>
                            </Row>
                            }

                            {/* Kartu Kredit */
                            pembayaran === "Kredit" && 
                            <Row className="ml-5">
                                <div className="kotaktiga1">
                                    <div className="p-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <img src={cash} width="50"></img>
                                            <b className="ml-3">KARTU KREDIT</b>
                                        </div>
                                        <div>Siapkan sejumlah uang sesuai total pembayaran yang diterima</div>
                                    </div>
                                </div>
                            </Row>
                            }

                            {/* M-Banking */
                            pembayaran === "M-Banking" &&
                            <Row className="ml-5">
                                <div className="kotaktiga1">
                                    <div className="p-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <img src={cash} width="50"></img>
                                            <b className="ml-3">M-Banking</b>
                                        </div>
                                        <div>Siapkan sejumlah uang sesuai total pembayaran yang diterima</div>
                                    </div>
                                </div>
                            </Row>
                            }
                        </div>
                    </div>
                </Col>
                <Col lg="3">
                    <div className="right-col p-4">
                        <strong>Detail Pesanan</strong>
                        <hr></hr>
                        <div className="d-flex justify-content-between">
                            <p>Total Belanja</p>
                            <p>Rp{rupiah(getTotalPrice(props))}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Diskon Belanja</p>
                            <p>Rp0</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Ongkos Kirim</p>
                            <p>Rp0</p>
                        </div>
                        <hr></hr>
                        <div className="d-flex justify-content-between">
                            <b>Total Pembayaran</b>
                            <p>Rp{rupiah(getTotalPrice(props))}</p>
                        </div>
                        <button className="btn btn-ijo w-100" 
                        onClick={buy}>
                            Bayar
                        </button>
                    </div>
                </Col>
            </Row>

            <Modal show={alamatInput} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Tambah Alamat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitAlamat} className="d-flex flex-column">
                        <Form.Group controlId="formNamaPenerima">
                            <Form.Label>Nama Penerima</Form.Label>
                            <Form.Control type="text" name="name" value={alamat.name}  onChange={(e) => setAlamat({...alamat, [e.target.name]: e.target.value})}
                            placeholder="Masukkan nama lengkap penerima barang" required/>
                        </Form.Group>
                        <Form.Group controlId="formNomorHP">
                            <Form.Label>Nomor Handphone</Form.Label>
                            <Form.Control type="text" name="number" value={alamat.number} onChange={(e) => setAlamat({...alamat, [e.target.name]: e.target.value})} placeholder="081xxxxxxxxx" required/>
                        </Form.Group>
                        <Form.Group controlId="formAlamat">
                            <Form.Label>Alamat Pengiriman</Form.Label>
                            <Form.Control type="text" name="address" value={alamat.address} onChange={(e) => setAlamat({...alamat, [e.target.name]: e.target.value})} placeholder="Masukkan Jalan, Nomor, Dusun, RT, RW" required/>
                        </Form.Group>
                        <Button className="align-self-center" type="submit" variant="ijo">
                            Simpan
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default CheckoutPage;
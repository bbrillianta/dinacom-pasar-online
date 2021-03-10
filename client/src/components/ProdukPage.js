import React, { useEffect, useState } from 'react';
import { SERVER_HOST } from '../config.js';
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
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [inputs, setInputs] = useState({});
    const [recommendedProducts, setRecommendedProducts] = useState([]);

    useEffect(async () => {
        const url = new URL(window.location.href);
        const pQuery = url.searchParams.get("p");

        fetch(`${SERVER_HOST}/product/query?p=${pQuery}`)
        .then(res => res.json())
        .then(data => setProduct(data.foundDoc));

        fetch(`${ SERVER_HOST }/product/recommended`)
        .then(res => res.json())
        .then(data => { 
            const sample = data.foundDocs.slice(0, 5);
            setRecommendedProducts(sample); 
        });
    }, [setProduct, setRecommendedProducts]);

    const productCard =(item, index) => {
        return ( <Card key={ index } className="product">
            <Card.Img variant="top" src={ `${ SERVER_HOST }/${ item.img.path }`} className="produk"/>
            <Card.Body>
                <Card.Title className="text-truncate m-0">
                    { item.name }
                </Card.Title>
                <small>{ item.seller.name }</small>
                <Card.Text className="mt-3">
                    <b>Rp { item.price }</b>/kg
                </Card.Text>
                <Button variant="success" style={{width: "100%"}}>BELI</Button>
            </Card.Body>
        </Card> 
        )
    }

    return (
        <Container>
            <Row className="justify-content-md-center produk mt-5">
                <Col lg="6">
                    <img src={ `${SERVER_HOST}/${product.img?.path}` } 
                    height="374" style={{ objectFit: "cover" }} className="fotoproduk w-100"></img>
                </Col>
                <Col lg="6">
                    <div className="bawah">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column">
                                <h3 className="mb-0"><b>{ product.name }</b></h3>
                                <p>{ product.stock }kg</p>
                            </div>
                            <Image width="50" height="50" style={{ objectFit: "cover" }} src={ `${SERVER_HOST}/${product.seller?.picture.path}`} roundedCircle />
                        </div>
                        <p className="mt-4"><b style={{fontSize: "30px"}}>Rp. { product.price }</b>/kg</p>
                        <p>Kuantitas</p>
                        <Row className="mb-4">
                            <Col md="5" className="plusminus">
                                <InputGroup>
                                    <Button variant="outline-danger" 
                                        onClick={ () => { 
                                            if(quantity < 1) setQuantity(0) 
                                            else setQuantity(quantity - 1) 
                                            } 
                                        }>
                                        -
                                    </Button>
                                    <FormControl type="text" className="text-center mx-3"
                                        value={ quantity }
                                        name="quantity"
                                        onChange={ (e) => { 
                                            if(e.target.value == "" || parseInt(e.target.value) < 1) setQuantity(0);
                                            else setQuantity(parseInt(e.target.value)); 
                                        } }
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-success" onClick={ () => setQuantity(quantity + 1) }>+</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            <Col md="7" className="text10 pl-5">
                                <small>Sub Total</small>
                                <h5 className="m-0"><b>{ product.price * quantity }</b></h5>
                            </Col>
                        </Row>
                        <div className="d-flex">
                            <Button variant="success"style={{ width: "500px" }}><img src={gambartas} className="img11"></img><text className="text11name">  Masukkan Kantong</text></Button>
                            <InputGroup className="pl-3">
                                <FormControl
                                    placeholder="Tawar produk"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    min={ quantity * product.minPrice }
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-danger">Tawar</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="produkterkait mt-5 pl-2">
                <Col md="auto"><b>Produk Terkait</b></Col>
            </Row>

            <Row className="justify-content-center">
                {
                    recommendedProducts.map((item, index) => 
                        productCard(item, index)
                    )
                }
            </Row>

        </Container>
    );
};

export default ProdukPage;
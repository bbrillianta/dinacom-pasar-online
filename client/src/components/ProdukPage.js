import React, { useEffect, useState } from 'react';
import { SERVER_HOST, rupiah } from '../config.js';
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
import ProductCard from './ProductCard';
import { useHistory } from 'react-router';

const ProdukPage = (props) => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [bidInput, setBidInput] = useState(0);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
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

    const addToCart = () => {
        if(props.user.username === '') return history.push('/login');

        const request = { 
            userID: props.user._id, 
            productID: product._id,
            quantity: quantity,
            status: 1,
            discount: 0
        };

        fetch(`${SERVER_HOST}/add-cart`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)
        })
        .then(res => res.json())
        .then(data => { 
            props.setUser(data.userSession) 
            let tempBought = {};
            for(let i = 0; i < data.userSession.carts.length; i++) {
                const item = data.userSession.carts[i];
                console.log(item.product);
                tempBought = { ...tempBought, [item.product._id]: true};
            }
           
            props.setBought({...tempBought});

            props.setShowRemoveFromCart(false);
            props.setShowAddToCart(true);
        });
    }

    const bid = (e) => {
        if(props.user.username === '') return history.push('/login');

        e.preventDefault();
        if(bidInput < product.minPrice * quantity) { 
            console.log(false) 
        } else {
            const request = { 
                userID: props.user._id, 
                productID: product._id,
                quantity: quantity,
                status: 2,
                discount: product.price - bidInput
            };

            fetch(`${SERVER_HOST}/add-cart`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request)
            })
            .then(res => res.json())
            .then(data => { 
                props.setUser(data.userSession) 
                let tempBought = {};
                for(let i = 0; i < data.userSession.carts.length; i++) {
                    const item = data.userSession.carts[i];
                    console.log(item.product);
                    tempBought = { ...tempBought, [item.product._id]: true};
                }
            
                props.setBought({...tempBought});

                props.setShowRemoveFromCart(false);
                props.setShowAddToCart(true);
            });
        }
    }

    const removeProduct = (item) => {
        if(props.user.username === '') return history.push('/login');

        fetch(`${SERVER_HOST}/remove-product-cart`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ itemID: item._id })
        })
        .then(res => res.json())
        .then(data => {
            props.setUser(data.userSession) 
            let tempBought = {};
            for(let i = 0; i < data.userSession.carts.length; i++) {
                const item = data.userSession.carts[i];
                tempBought = { ...tempBought, [item.product._id]: true};
            }
            props.setBought({...tempBought});

            props.setShowAddToCart(false);
            props.setShowRemoveFromCart(true);
        });
    }

    return (
        <Container>
            <Row className="justify-content-md-center produk mt-5">
                <Col lg="6">
                    <img src={ `${SERVER_HOST}/${product.img?.path}.jpg` } 
                    height="374" style={{ objectFit: "cover" }} className="fotoproduk w-100"></img>
                </Col>
                <Col lg="6">
                    <div className="bawah">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column">
                                <h3 className="mb-0"><b>{ product.name }</b></h3>
                                <p>{ product.stock }kg</p>
                            </div>
                            <Image width="50" height="50" style={{ objectFit: "cover" }} src={ `${SERVER_HOST}/${product.seller?.picture.path}.jpg`} roundedCircle />
                        </div>
                        <p className="mt-4"><b style={{fontSize: "30px"}}>Rp{ rupiah(product.price) }</b>/kg</p>

                        <p className="m-0 mb-1">Kuantitas</p>
                        <Row className="mb-4 align-items-center">
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
                                    <FormControl type="text" className="text-center mx-2"
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
                                <h5 className="m-0"><b>Rp{ rupiah(product.price * quantity) }</b></h5>
                            </Col>
                        </Row>
                        <div className="d-flex flex-column">
                            {
                                props.bought[product._id]

                                ?   <div className="d-flex"> 
                                        <Button variant="danger" style={{ width: "500px" }} onClick={() => removeProduct(product) }>
                                            <img src={gambartas} className="img11"></img>
                                            <text className="text11name"> Keluarkan Kantong </text>
                                        </Button>
                                    </div>

                                :   <div className="d-flex">
                                        <Button variant="success" style={{ width: "280px" }} onClick={addToCart} >
                                            <img src={gambartas} className="img11"></img>
                                            <text className="text11name"> Masukkan Kantong </text>
                                        </Button>
                                
                                        <Form method="POST" onSubmit={bid}>
                                            <InputGroup className="pl-3">
                                                    <FormControl
                                                        placeholder="Tawar produk"
                                                        aria-label="Recipient's username"
                                                        aria-describedby="basic-addon2"
                                                        onChange={(e) => setBidInput(e.target.value) }
                                                    />
                                                <InputGroup.Append>
                                                    <Button variant="ijo-outline" type="submit" >Tawar</Button>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </Form>
                                    </div>
                            }
                            
                            { !props.bought[product._id] && <small className="align-self-end text-muted">*Maksimal tawaran Rp{rupiah(product.minPrice * quantity)}</small> }
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
                        <ProductCard item={item} index={index} user={props.user} setUser={props.setUser}
                        bought={props.bought} setBought={props.setBought}
                        setShowAddToCart={props.setShowAddToCart} setShowRemoveFromCart={props.setShowRemoveFromCart}
                        />
                    )
                }
            </Row>

        </Container>
    );
};

export default ProdukPage;
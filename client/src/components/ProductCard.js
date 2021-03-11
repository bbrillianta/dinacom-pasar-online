import { Container, Row, Col, CardDeck, Card, Button, CardColumns} from 'react-bootstrap';
import { SERVER_HOST, rupiah } from '../config.js';

const ProductCard = (props) => {
    const buyProduct = () => {
        const request = { 
            userID: props.user._id, 
            productID: props.item._id,
            quantity: 1,
            status: 1
        };

        fetch(`${SERVER_HOST}/add-cart`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)
        })
        .then(res => res.json())
        .then(data => props.setUser(data.userSession));
    }

    return ( <Card key={ props.index } className="product">
        <a href={ `/product?p=${ props.item._id }` }>
            <Card.Img variant="top" src={ `${ SERVER_HOST }/${ props.item.img.path }.jpg`} className="produk"/>
        </a>
        <Card.Body>
            <Card.Title className="text-truncate m-0">
                <a href={ `/product?p=${ props.item._id }` }>{ props.item.name }</a>
            </Card.Title>
            <small>{ props.item.seller.name }</small>
            <Card.Text className="mt-3">
                <b>Rp{ rupiah(props.item.price) }</b>/kg
            </Card.Text>
            <Button variant="ijo" style={{width: "100%"}} onClick={buyProduct}>BELI</Button>
        </Card.Body>
    </Card> 
    )
}

export default ProductCard;
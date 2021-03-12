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
        .then(data => { 
            props.setUser(data.userSession);
            let tempBought = {};
            for(let i = 0; i < data.userSession.carts.length; i++) {
                const item = data.userSession.carts[i];
                console.log(item.product);
                tempBought = { ...tempBought, [item.product._id]: true};
            }
           
            props.setBought({...tempBought});
        });
    }

    const removeProduct = (item) => {
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
        });
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
            {
                props.bought[props.item._id]

                ?   <Button variant="danger" style={{width: "100%"}} onClick={() => removeProduct(props.item)}>BATALKAN BELI</Button>

                :   <Button variant="ijo" style={{width: "100%"}} onClick={buyProduct}>BELI</Button>
            }
        </Card.Body>
    </Card> 
    )
}

export default ProductCard;
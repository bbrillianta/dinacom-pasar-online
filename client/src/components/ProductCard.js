import { Container, Row, Col, CardDeck, Card, Button, CardColumns} from 'react-bootstrap';
import { useHistory } from 'react-router';
import { SERVER_HOST, rupiah } from '../config.js';

const ProductCard = (props) => {
    const history = useHistory();
    
    const buyProduct = () => {
        if(props.user.username === '') return history.push('/login');

        const request = { 
            userID: props.user._id, 
            productID: props.item._id,
            quantity: 1,
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
            props.setUser(data.userSession);
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

    return ( <Card key={ props.index } className="product">
        <a href={ `/product?p=${ props.item._id }` }>
            <Card.Img variant="top" src={ `${ SERVER_HOST }/${ props.item.img.path }.jpg`} className="produk"/>
        </a>
        <Card.Body>
            <Card.Title className="text-truncate m-0">
                <a href={ `/product?p=${ props.item._id }` } style={{ fontWeight: "bold" }}>{ props.item.name }</a>
            </Card.Title>
            <small>{ props.item.seller.name }</small>
            <Card.Text className="mt-3">
                <b>Rp{ rupiah(props.item.price) }</b>/kg
            </Card.Text>
            {
                props.bought[props.item._id]

                ?   <Button variant="danger" style={{width: "100%"}} onClick={() => removeProduct(props.item)}>- Kantong</Button>

                :   <Button variant="ijo" style={{width: "100%"}} onClick={buyProduct}>+ Kantong</Button>
            }
            <a href={ `/product?p=${ props.item._id }` }>
                <Button variant="ijo-outline" className="mt-2 d-flex align-items-center justify-content-center" style={{width: "100%", height: "30px"}}>
                    Tawar
                </Button>
            </a>
        </Card.Body>
    </Card> 
    )
}

export default ProductCard;
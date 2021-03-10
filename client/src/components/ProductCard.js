import { Container, Row, Col, CardDeck, Card, Button, CardColumns} from 'react-bootstrap';
import { SERVER_HOST } from '../config.js';

const ProductCard = (props) => {
    return ( <Card key={ props.index } className="product">
        <a href={ `/product?p=${ props.item._id }` }>
            <Card.Img variant="top" src={ `${ SERVER_HOST }/${ props.item.img.path }`} className="produk"/>
        </a>
        <Card.Body>
            <Card.Title className="text-truncate m-0">
                <a href={ `/product?p=${ props.item._id }` }>{ props.item.name }</a>
            </Card.Title>
            <small>{ props.item.seller.name }</small>
            <Card.Text className="mt-3">
                <b>Rp { props.item.price }</b>/kg
            </Card.Text>
            <Button variant="ijo" style={{width: "100%"}}>BELI</Button>
        </Card.Body>
    </Card> 
    )
}

export default ProductCard;
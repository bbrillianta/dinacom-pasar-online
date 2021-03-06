import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ShowProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/product')
        .then(response => response.json())
        .then(data => setProducts(data.foundDocs));
    }, [setProducts]);

    return(
        <div>
            {
                products.map((item, index) =>
                    <Card key={ index } style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ `http://localhost:3001/${ item.img.path }` }  />
                        <Card.Body>
                            <Card.Title>{ item.name }</Card.Title>
                            <Card.Text>
                            { item.seller.name }
                            </Card.Text>
                            <Card.Text>
                                <strong>
                                    { item.price }
                                </strong>/kg
                            </Card.Text>
                            <Button variant="primary">Beli</Button>
                        </Card.Body>
                    </Card> 
                )
            }
        </div>
    )    
}

export default ShowProducts;
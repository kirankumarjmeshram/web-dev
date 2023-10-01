import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";

/**
 * 
 * @returns detail information about product
 */

const ProductScreen = () => {
    const [product, setProduct] = useState({});
    const {id:productId} = useParams();

    useEffect(()=>{
        const fetchProduct = async () =>{
            const {data} = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setProduct(data);
            console.log(data.rating.rate)
        }
        fetchProduct();
    },[productId])
    

  return <>
    <Link className="btn btn-light my-3" to='/'>Go Back</Link>
    <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.title} fluid/>
        </Col>
        <Col md={4}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{product.title}</h3>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item>
                    <Rating value={product.rating?.rate} text={product.rating?.count}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: &#8377; {product.price}
                </ListGroup.Item>
                <ListGroup.Item>Description: {product.description}</ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>Price: </Col>
                            <Col><strong>&#8377;{product.price}</strong></Col>
                        </Row>
                    </ListGroup.Item>
                <ListGroup.Item>
                    <Button className="btn-block" type="buttom" >Add to Cart</Button>
                </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
  </>
}

export default ProductScreen
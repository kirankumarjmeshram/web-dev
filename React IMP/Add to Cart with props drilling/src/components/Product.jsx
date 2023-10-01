import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

/**
 * 
 * @param {{product, cart, setCart}} param0 
 * @returns basic product info for HomeScreen
 */

const Product = ({product, cart, setCart}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product.id}`}>
            <Card.Img src ={product.image} variant="top" />
        </Link>
        <Card.Body>
            <Link to={`/product/${product.id}`}>
                <Card.Title as="div" className="product-title">
                    <strong>{product.title}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
                <Rating value={product.rating?.rate} text={product.rating?.count}/>
            </Card.Text>
            <Card.Text as="h3">
                <strong>&#8377; {product.price}</strong>
            </Card.Text>
            {cart.includes(product) ?<Button onClick={()=>setCart(cart.filter(p=>p.id!==product.id))} variant="secondary">Remove from Cart</Button>:<Button onClick={()=>setCart([...cart,product])} variant="secondary">Add to Cart</Button>}
            
            
        </Card.Body>
    </Card>

  )
}

export default Product
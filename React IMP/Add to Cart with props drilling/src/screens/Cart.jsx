import React, { useState, useEffect } from "react";
import {Row, Col} from 'react-bootstrap'
import Product from "../components/Product";
/**
 * 
 * @param {{cart:number
 *  setCart: Function
 * }} param0 
 * @returns product added in cart
 * 
 * Cart components shows all the products which are added in cart
 */
const Cart = ({ cart, setCart }) => {
    /**
     * total is the total price of the product
     */
  const [total, setTotal] = useState();

  useEffect(()=>{
    setTotal(cart.reduce((a,b)=>a+b.price,0))
  },[cart])

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: {total}</span>
      <Row>
        {cart.map((el) => (
            <Col key={el.id} sm={12} md={6} lg={4} xl={3}>
                <Product key={el.id} product={el} cart={cart} setCart={setCart} />
            </Col>
          
        ))}
      </Row>
    </div>
  );
};

export default Cart;

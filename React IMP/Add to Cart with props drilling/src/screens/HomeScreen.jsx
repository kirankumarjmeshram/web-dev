import { useEffect, useState } from "react";
//import axios from "axios";
import { Row, Col, Form } from "react-bootstrap";
import Product from "../components/Product";
//const api = "http://localhost:5000";

/**
 * Integrating fakestoreapi
 * @returns returning product data
 */
const HomeScreen = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [sortedBy, setSortedBy] = useState("price");
  //const [cart, setCart] = useState([]);
  console.log(cart);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // Replace with your API URL
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Update the state with the fetched data
        //console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    // const fetchProducts = async () => {
    //   const { data } = await axios.get(`${api}/products`);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleSort = () => {
    const sorted = [...products].sort((a, b) => {
      if (sortedBy === "highToLow") {
        return b.price - a.price;
      }
      if (sortedBy === "lowToHigh") {
        return a.price - b.price;
      }
      if (sortedBy === "rating") {
        return b.rating.rate - a.rating.rate;
      }
    });
    setProducts(sorted);
  };

  /**
   * sort the data wrt price low to high
   */

  return (
    <div>
      <h1>Products</h1>
      <div>
        <Form.Select
          onChange={(e) => setSortedBy(e.target.value)}
          aria-label="Default select example"
        >
          <option>Sort By</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="rating">Rating</option>
        </Form.Select>
        <button
          onClick={handleSort}
          type="button"
          className="btn btn-primary m-3"
        >
          Sort
        </button>
      </div>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} cart={cart} setCart={setCart} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;

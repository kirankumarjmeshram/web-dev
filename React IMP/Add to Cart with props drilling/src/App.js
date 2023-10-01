//import { Container } from 'react-bootstrap';
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./screens/Cart";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
/**
 * 
 * @returns all the required components 
 */
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="container">
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route
            path="/"
            element={<HomeScreen cart={cart} setCart={setCart} />}
          />
          <Route path="product/:id" element={<ProductScreen />} />
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

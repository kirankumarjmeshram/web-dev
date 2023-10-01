import { Container, Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart} from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";

/**
 * 
 * @param {{cart}} param0 
 * @returns header of the app
 */

const Header = ({cart}) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="logo" className="w-25" />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart />
                  Cart ({cart.length})
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

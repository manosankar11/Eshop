import {Container, Dropdown,Nav,Navbar} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
// import "../style.css";
import Logo from "../Logo/logo";
import CartHeaderButton from "../CartHeaderButton/CartHeaderButton";
import Search from "../Header/Search/Search";
import './Header.css'


const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand style={{ textDecoration: "None" }}>
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>


        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search">
            <Search productDispatch={productDispatch} />
          </Navbar.Text>
        )}
        <Nav>
          <Dropdown style={{marginRight:20}} >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Login
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/Register">Register</Dropdown.Item>
              <Dropdown.Item href="/login">Login</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
         
          <CartHeaderButton  cart={cart} dispatch={dispatch} />
        </Nav>

      </Container>
    </Navbar>
  );
};

export default Header;

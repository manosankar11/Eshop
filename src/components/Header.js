import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../components/context/Context";
import "./styles.css";
import Logo from "./Logo/logo";
import CartHeaderButton from "./CartHeaderButton/CartHeaderButton";
import Search from "./Search";
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
        <Navbar.Brand style={{textDecoration:"None"}}>
          <Link to="/"> 
            <Logo />
          </Link>
        </Navbar.Brand>
        
         
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search">
           <Search productDispatch={productDispatch}/>
          </Navbar.Text>
        )}
        <Nav>
        <Navbar.Brand>
          <Link to="./login">Login</Link>
        </Navbar.Brand>
          <CartHeaderButton cart={cart} dispatch={dispatch}/>
        </Nav>
       
      </Container>
    </Navbar>
  );
};

export default Header;

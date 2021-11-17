import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

import {
  Badge,
  Dropdown,
} from "react-bootstrap";
//import { Link } from "react-router-dom";
import GoToCartBtn from '../GoToCartBtn/GoToCartBtn';
import DeleteIcon from '../Cart/DeleteIcon';
import "../styles.css"


const CartHeaderButton = ({cart,dispatch}) => {
    return (
        <div>
            <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <DeleteIcon prod={prod} dispatch={dispatch} />
                    </span>
                  ))}
                  <GoToCartBtn />
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
    )
}

export default CartHeaderButton

import React from 'react'
import './CardContainer.css'
import CardImage from '../CardImage/CardImage'
import CardTitle from '../CardTitle/CardTitle'
import { CartState } from '../../context/Context'
import Rating from '../Rating/Rating'
import { Button } from '@material-ui/core'
import { MdOutlineRemoveShoppingCart } from "react-icons/md"
import { BsCartPlus } from "react-icons/bs"


const CardContainer = () => {
    const {
        state: { products },
    } = CartState();
    const {
        state: { cart }, dispatch,
    } = CartState();
    console.log(cart)
    return (
        <div className="products">
            {products.map((prod) => (
                <div className="card">
                    <div>
                        <CardImage prod={prod} />
                    </div>

                    <div className="product__title">
                        <CardTitle prod={prod} />
                    </div>

                    <div>
                        {prod.fastDelivery ? (
                            <div>Fast Delivery</div>
                        ) : (
                            <div>4 day Delivery</div>
                        )}
                    </div>
                    <div className="product__price">
                        <h4>₹ {prod.price}</h4>
                        <div> {
                            cart.some((p) => p.id === prod.id) ? (
                                <Button
                                    className="Cart__Remove"
                                    onClick={() => {
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: prod,
                                        })
                                    }} variant="danger"><MdOutlineRemoveShoppingCart className="Cart__Remove" /></Button>
                            ) : (
                                <Button disabled={!prod.inStock}
                                    onClick={() => {
                                        dispatch({
                                            type: "ADD_TO_CART",
                                            payload: prod,
                                        })
                                    }}
                                >
                                    {!prod.inStock ? "out of Stock" : <BsCartPlus className="Cart__Add" />}
                                </Button>
                            )
                        }</div>
                    </div>

                    <div className="product__rating">
                        
                        <Rating rating={prod.rating} />
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default CardContainer;

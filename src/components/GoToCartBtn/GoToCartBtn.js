import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap"


const GoToCartBtn = () => {
    return (
        <div>
            <Link to="/cart">
                <Button style={{ width: "95%", margin: "0 10px" }}>
                    Go To Cart
                </Button>
            </Link>
        </div>
    )
}

export default GoToCartBtn

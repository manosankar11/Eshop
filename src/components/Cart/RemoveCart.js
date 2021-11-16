import React from 'react'
import { Button } from 'react-bootstrap'

const RemoveCart = ({prod,dispatch}) => {
    return (
        <div>
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
        </div>
    )
}

export default RemoveCart

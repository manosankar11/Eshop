import React from 'react'
import { Button } from 'react-bootstrap'

const AddCart = ({prod,dispatch}) => {
    return (
        <div>
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
        </div>
    )
}

export default AddCart

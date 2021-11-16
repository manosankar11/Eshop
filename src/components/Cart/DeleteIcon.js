import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const DeleteIcon = ({prod,dispatch}) => {
    return (
        <div>
            <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
        </div>
    )
}

export default DeleteIcon

import React from 'react'
import { Card } from 'react-bootstrap'

const CardTitle = ({prod}) => {
    return (
        <div>
              <Card.Title>{prod.name}</Card.Title>
        </div>
    )
}

export default CardTitle

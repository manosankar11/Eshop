import React from 'react'
import { Card } from 'react-bootstrap';



const CardImage = ({ prod }) => {
    return (
        <div>
             <Card.Img variant="top" src={prod.image} alt={prod.name} />
        </div>
    )
}

export default CardImage

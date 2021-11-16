import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '../Rating/Rating'

const CardSubTitle = ({prod}) => {
    return (
        <div>
                      <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
        </div>
    )
}

export default CardSubTitle

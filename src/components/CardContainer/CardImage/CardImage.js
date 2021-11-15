import React from 'react'
import "../../assets/images/0.jpg";


const CardImage = ({ prod }) => {
    return (
        <div>
            <img className="product__img"
                src={prod.image} alt={prod.name} />
            {/* <img className="product__img" src={require(post.filenametest).default} alt={post.title}/> */}
        </div>
    )
}

export default CardImage

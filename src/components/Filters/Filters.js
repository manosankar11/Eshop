import React, { useState } from 'react'
import Rating from '../CardContainer/Rating/Rating';
import { CartState } from '../context/Context'

const Filters = () => {
    const [rate,setRate] = useState(2);

    // const { productDispatch,
    //     productState: { byStock, byFastDelivery, sort, byRating },
    // } = CartState();
    return (
        <div>
            <span>
                <label style={{paddingRight:10}}>Rating: </label>
            <Rating
                rating={rate}
                onClick={(i)=> setRate(i)}
                //   onClick={(i) =>
                //     productDispatch({
                //       type: "FILTER_BY_RATING",
                //       payload: i + 1,
                //     })
                //   }
                style={{ cursor: "pointer" }}
            />
        </span>
        </div >
    )
}

export default Filters

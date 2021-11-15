import React from 'react';
import CardContainer from '../CardContainer/Container/CardContainer';
import Filters from '../Filters/Filters';
import './HomePage.css'



const HomePage = () => {

    return (
        <div className="Layout">
            <div className="card__layout">
                <CardContainer />
            </div>
            <div className="filter__layout">
                <Filters />
            </div>
        </div>
    )
}

export default HomePage

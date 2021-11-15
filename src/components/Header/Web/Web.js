import React from 'react'
import './Web.css';
import Search from '../../Search';
import {BsCart4} from 'react-icons/bs'


const Web = () => {
    return (
        <div className="web">
            <div className="web-option">
                <a className="icon_cart">
               Login
                </a>
            </div>
            <div className="web-option">
                <a className="icon_cart">
               SignUp
                </a>
            </div>
           <div className="web-option">
                <a className="icon_cart">
               <BsCart4 />cart
                </a>
            </div>
            
        </div>
    )
}

export default Web

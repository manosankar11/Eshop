import React from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import './Mobile.css'

const Mobile = ({ isOpen, setIsOpen }) => {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <AiFillCloseCircle />
            </div>
        </div>
    )
}

export default Mobile

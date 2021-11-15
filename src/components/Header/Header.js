import React, { useState } from 'react'
import Web from './Web/Web'
import Mobile from './Mobile/Mobile'
import { CgMenuRound } from 'react-icons/cg'
import './Header.css';
import Logo from '../Logo/logo';
import Search from '../Search';

const Header = ({post}) => {
    const [isOpen, setIsOpen] =useState(false);

    return (
        <div className="header">
            <Logo />
            <div className="Search_align">
                <Search post={post}/>
            </div>
            <div className="menu">
                <div className="web-menu"><Web /></div>
                <div className="mobile-menu">
                   <div className="menu-icon" onClick={()=>setIsOpen(!isOpen)}>
                       <CgMenuRound />
                    </div>
                    {isOpen && <Mobile setIsOpen={setIsOpen} isOpen={isOpen} /> }
                </div>
            </div>
        </div>
    );
};

export default Header

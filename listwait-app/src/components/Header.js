import React from 'react'
import logo from '../img/logo.png'

import './Header.css';

const Header = () => {
    return (
        <>
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
        </div>
        </>
    )
};

export default Header

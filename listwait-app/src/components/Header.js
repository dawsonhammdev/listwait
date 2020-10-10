import React from 'react'
import logo from '../img/logo.png'

import './ComponentStyles/Header.css';

const Header = () => {
    return (
        <>
        <div className="head">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
        </div>
        </>
    )
};

export default Header

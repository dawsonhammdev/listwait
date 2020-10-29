import React from 'react'
import logo from '../img/logo.png'

import {useHistory} from "react-router-dom";

import './ComponentStyles/Header.css';

const Header = () => {
    const history = useHistory();

    const onSubmit = (e) => {
        localStorage.clear('token')
        history.push("/account-create")
    };
    return (
        <>
        <div className="head">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className='logout'>
                <button onClick={onSubmit}>LogOut</button>
            </div>
        </div>
        </>
    )
};

export default Header

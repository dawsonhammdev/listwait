import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';



import under from '../img/under.svg'

import './ComponentStyles/Dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="dashboard">
                    <div className="container">
                        <h1>Coming Soon...</h1>
                    </div>
                    <div className="under">
                        <img src={under} alt="Under Construction Image" />
                    </div>
                <Footer />
            </div>
            </>
        )
    }
}

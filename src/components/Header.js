import React, { Component } from 'react';
import logo from '../logo.svg'
import './Header.css';
import Navbar from './Navbar';
export default class Header extends Component {
    render () {
        return (
            <header>
                <div className="header__left">
                    <img src={logo} alt=""/>
                    <div>Puffin</div>
                </div>
                <div className="header__right">
                    <Navbar />
                </div>
            </header>
        );
    }
}
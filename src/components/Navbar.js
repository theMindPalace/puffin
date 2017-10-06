import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
    render () {
        return (
            <nav className="navbar">
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#home">ABOUT</a></li>
                </ul>
            </nav>
        );
    }
}
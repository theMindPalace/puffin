import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Footer.css';
export default class Footer extends Component {
    render () {
        return (
            <footer>
               Copy Right { new Date().getFullYear() } { this.props.title }
            </footer>
        );
    }
}

Footer.propTypes = {
    title: propTypes.string
}
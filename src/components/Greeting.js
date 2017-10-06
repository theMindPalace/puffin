import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import  './Greeting.css'

export default class Greeting extends Component {

    constructor(props) {

        super(props);

        this.state = {
            show:true,
            classes: {
                'show': true,
                'greet': true
            }
        }

        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        let showClass = this.state.classes.show;
        this.setState({classes:{ show: !showClass, greet:true}});
    }

    render() {

        let { show , classes } = this.state;

        classes = classNames(classes);
        console.log(classes);
        return(
            <div className={ classes }>
                <h1>
                         { this.props.msg }
                         <button className="greet__close" onClick={ this.toggleShow }>&times;</button>
                </h1>
            </div>
            
        )
    }
}

Greeting.PropTypes = {
    msg: PropTypes.string.isRequired
}
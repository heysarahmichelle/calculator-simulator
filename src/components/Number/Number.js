import React, { Component } from 'react';
import './number.scss';

export default class Number extends Component {
    render() {
        return (
            <div className="number-circle">
                {this.props.number}
            </div>
        )
    }
}

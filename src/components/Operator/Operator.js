import React, { Component } from 'react';
import './operator.scss'

export default class Operator extends Component {
    render() {
        return (
            <div className="operator-circle">
                {this.props.operator}
            </div>
        )
    }
}

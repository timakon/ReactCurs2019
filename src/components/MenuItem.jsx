import React, {Component} from 'react';
import {Link} from 'react-router';
import './style.css'

class MenuItem extends Component {
    render() {
        return (
            <li className={this.props.active ? 'nav-item active' : 'nav-item'}>
                <Link to={this.props.href}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}

export default MenuItem;
import React, {Component} from 'react';
import {Link} from 'react-router'

class Menu extends Component {
    render() {
        return (
            <nav>
                <Link to='/'>
                    {this.props.logo}
                </Link>
                <div>
                    <ul>
                        {this.props.children}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;
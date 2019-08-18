import React, {Component} from 'react';
import {Link} from "react-router";

class User extends Component {
    render() {
        return (
            <div>
                <h3>
                    <Link to={`/users/${this.props.id}`}>
                        {this.props.username}
                    </Link>
                </h3><br/>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.email}</li>
                    <li>{this.props.phone}</li>
                </ul>
            </div>
        );
    }
}

export default User;
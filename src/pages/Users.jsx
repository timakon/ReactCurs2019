import React, {Component} from 'react';

import UsersList from '../components/UsersList.jsx'

class Users extends Component {
    render() {
        return (
            <div>
            {
                (!this.props.children) ? (<UsersList />) : (this.props.children)
            }
            </div>
        );
    }
}

export default Users;
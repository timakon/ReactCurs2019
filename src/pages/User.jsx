import React, {Component} from 'react';
import axios from 'axios';
import UserProfile from "../components/User.jsx";

class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }
    render() {
        return (
            <div>
                <UserProfile {...this.state.user}/>
            </div>
        );
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
            .then(response => {
                this.setState({user: response.data});
            });
    }
}

export default User;
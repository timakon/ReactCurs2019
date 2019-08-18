import React, {Component} from 'react';

import Menu from '../components/Menu.jsx';
import MenuItem from '../components/MenuItem.jsx';

class Layout extends Component {
    constructor(props){
        super(props);
        this.logo = 'React blog'
    }
    isActive(href){
        return window.location.pathname === href
    }
    render() {
        return (
            <div>
                <Menu brand = {this.logo}>
                    <MenuItem href = "/" active={this.isActive('/')}>
                        Главная страница
                    </MenuItem>
                    <MenuItem href = "/users" active={this.isActive('/users')}>
                        Пользователи
                    </MenuItem>
                </Menu>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
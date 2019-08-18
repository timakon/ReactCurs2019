import ReactDOM from 'react-dom';
import React, {Component} from 'react';


//const USERS = ['Тима','Макс','Дима'];
//import Users from "./components/Users.jsx";
// <Users items={USERS} />

import Button from "./components/Buttons/Button.jsx";

import LifeCycleMount from "./components/LifeCycleMount.jsx";
{/*<h1>Hello</h1>*/}
{/*<LifeCycleMount number = {this.state.number}/>*/}
{/*<button onClick={() => this.setState({number: this.state.number +1})}>*/}
{/*    +1*/}
{/*</button>*/}
{/*<button onClick={() => this.setState({number: this.state.number -1})}>*/}
{/*-1*/}
{/*</button>*/}

{/*<Button/>*/}
{/*<Users items={USERS} />*/}

import {Router, Route, IndexRoute, browserHistory} from "react-router";
import Layout from "./layouts/Layout.jsx";
import Users from "./pages/Users.jsx";
import MainPage from "./pages/Main.jsx";
import User from "./pages/User.jsx";



ReactDOM.render(<Router history={browserHistory}>
    <Route path='/' component={Layout}>
        <IndexRoute component={MainPage}/>
        <Route path='users' component={Users}>
            <Route path=':userId' component={User}/>
        </Route>
    </Route>
</Router>, document.getElementById('main'));
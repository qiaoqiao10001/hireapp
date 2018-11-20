import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import {HashRouter,Switch,Route} from 'react-router-dom'


import Login from './containers/login'
import Main from './containers/main'
import Register from './containers/register'




ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/main' component={Main}/>
            <Route path='/register' component={Register}/>
        </Switch>
    </HashRouter>

), document.getElementById('root'));



import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Prompt, Redirect } from "react-router-dom";
import Login from './login/index';
import Home from './home/index';


class Routes extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/home' component={Home}></Route>
                    <Route exact path="/" component={Login}></Route>
                    
                </div>
            </Router>
        )
    }
}

export default Routes;

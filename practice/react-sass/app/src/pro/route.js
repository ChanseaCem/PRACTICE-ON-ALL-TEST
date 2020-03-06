import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'; 
import Login from "./pages/login/index";
import Home from "./pages/home/index";

class Routes extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Route path = "/login" component = {Login}/>
                    <Route path = "/home" component = {Home}/>
                    <Route exact path="/" component= {Login}></Route>
                </Router>
            </div>
        )
    }
}

export default Routes;

import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Redirect,Link,Prompt} from 'react-router-dom';

class Index extends Component {
    render(){
        return <h1>主页 {this.props.match.params.id}{this.props.match.params.name}</h1>
    }
}
class Other extends Component {
    render(){
        return <h1>其它页{this.props.match.params.num}</h1>
    }
}
class Info extends Component {
    render(){
        return <h1>详情页</h1>
    }
}
class Home extends Component {
    constructor(){
        super();
        this.state = {
            num: 12345
        }
    }
    render(){
        return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/index/100/abc" >
                    <Prompt when={true} message ="确定离开此页面？"></Prompt>
                    首页
                    </Link></li>
                    <li><Link to={"/other/"+this.state.num} >其它页</Link></li>
                    <li><Link to="/info" >详情页</Link></li>
                </ul>
            </div>
            <div>
                <Route path="/index/:id/:name" component={Index}></Route>
                <Route path="/other/:num" component={Other}></Route>
                <Route path="/info" component={Info}></Route>
            </div>
    
        </Router>
        )
    }
}
export default Home;
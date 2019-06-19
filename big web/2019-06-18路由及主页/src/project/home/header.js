import React,{Component} from 'react'

class Top extends Component {
    constructor(){
        super();
        this.state = {
            collapsed: false,
        }
    }

    render(){
        return (
            <div>头部</div>
        )
    }
}
export default Top;
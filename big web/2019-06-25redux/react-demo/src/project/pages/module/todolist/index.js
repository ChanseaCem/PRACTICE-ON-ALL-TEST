import React from 'react'
import {connect} from 'react-redux';
//装饰器  连接
@connect (
    (state)=>({
        test:state.test
    })
)
 class TodoList extends React.Component {

    render() {
        return (
            <div>
              {this.props.test}
            </div>
        );
    }
}
export default TodoList;
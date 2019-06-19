import React,{Component} from 'react'
import { Layout } from 'antd';
const { Content } = Layout;

class Main extends Component {
    constructor(){
        super();
        this.state = {
            collapsed: false,
        }
    }

    render(){
        return (
            <Content
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280,
                    }}
                >
                    内容内容内容内容内容内容内容内容内容内容内容内容 内容内容内容
                </Content>
        )
    }
}
export default Main;
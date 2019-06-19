import React,{Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import Top from './header'
import Main from './content'
const { Header, Sider, Content } = Layout;


class Home extends Component {
    constructor(){
        super();
        this.state = {
            collapsed: false,
        }
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render(){
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" >logo</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                    />
                </Header>
                <Main></Main>
                </Layout>
          </Layout>
        )
    }
}
export default Home;
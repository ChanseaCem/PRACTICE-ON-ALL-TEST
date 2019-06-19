import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Prompt, Redirect } from "react-router-dom";
// import { Layout, Menu, Icon, Divider} from "antd";
// import { Sider, Header, Content, Footer} from "antd";

class Lon extends React.Component{
    render(){
        console.log(this.props)

        return(
            <div>zhuye{this.props.match.params.id}</div>
        )
    }
}

class Lon2 extends React.Component{
    render(){
        return(
            <div>2</div>
        )
    }
}

class Lon3 extends React.Component{
    render(){
        return(
            <div>3</div>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/index/id" >主页</Link></li>
                        <li><Link to="/Lon2" >主页2</Link></li>
                        <li><Link to="/Lon3" >主页3</Link></li>
                    </ul>
                    <Route path = "/index/:id" component = {Lon}></Route>
                    <Route path = "/Lon2" component = {Lon2}></Route>
                    <Route path = "/Lon3" component = {Lon3}></Route>
                </div>
            </Router>
            // <Layout>
            //     <Sider
            //         breakpoint="lg"
            //         collapsedWidth="0"
            //         onBreakpoint={broken => {
            //             console.log(broken);
            //         }}
            //         onCollapse={(collapsed, type) => {
            //             console.log(collapsed, type);
            //         }}
            //     >
            //         <div className="logo" />
            //         <Menu
            //             theme="dark"
            //             mode="inline"
            //             defaultSelectedKeys={["4"]}
            //         >
            //             <Menu.Item key="1">
            //                 <Icon type="user" />
            //                 <span className="nav-text">nav 1</span>
            //             </Menu.Item>
            //             <Menu.Item key="2">
            //                 <Icon type="video-camera" />
            //                 <span className="nav-text">nav 2</span>
            //             </Menu.Item>
            //             <Menu.Item key="3">
            //                 <Icon type="upload" />
            //                 <span className="nav-text">nav 3</span>
            //             </Menu.Item>
            //             <Menu.Item key="4">
            //                 <Icon type="user" />
            //                 <span className="nav-text">nav 4</span>
            //             </Menu.Item>
            //         </Menu>
            //     </Sider>
            //     <Layout>
            //         <Header style={{ background: "#fff", padding: 0 }} />
            //         <Content style={{ margin: "24px 16px 0" }}>
            //             <div
            //                 style={{
            //                     padding: 24,
            //                     background: "#fff",
            //                     minHeight: 360
            //                 }}
            //             >
            //                 content
            //             </div>
            //         </Content>
            //         <Footer style={{ textAlign: "center" }}>
            //             Ant Design ©2018 Created by Ant UED
            //         </Footer>
            //     </Layout>
            // </Layout>
        );
    }
}

export default Home;

import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Prompt,
    Redirect
} from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;

class Home extends React.Component {
    constructor(){
        super();
        
        this.state = {
            collapsed: false
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    render() {
        return (
            <Content
                style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280
                }}
            >
                Content
            </Content>
        );
    }
}

export default Home;

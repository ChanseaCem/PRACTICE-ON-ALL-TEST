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
import "./home.css";

const { Header, Sider, Content } = Layout;

class Head extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <Header style={{ background: "#fff", padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
                    onClick={this.props.toggle}
                />
                <Icon className="trigger2" type="user" />
            </Header>
        );
    }
}

export default Head;

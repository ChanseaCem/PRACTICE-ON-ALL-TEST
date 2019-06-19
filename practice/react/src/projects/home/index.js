import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Prompt,
    Redirect
} from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import { Switch } from 'antd';
import Head from "./header";
import Con from "./content";
import Menus from "./menus";

const { Header, Sider, Content } = Layout;

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            collapsed: false,
            menulist: [
                { nav: "主页", iconType: "bank" },
                { nav: "用户列表", iconType: "team" },
                { nav: "用户列表", iconType: "team" },
                { nav: "用户列表", iconType: "team" },
                { nav: "用户列表", iconType: "team" },
                { nav: "用户列表", iconType: "team" },
                { nav: "设置", iconType: "setting" }
            ],
            Administrator:"Chansea Cem"
        };
    }

    toggle = () => {
        console.log();
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    onChange = (checked) => {
        console.log(`switch to ${checked}`);
      }
    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo">{this.state.Administrator}</div>
                    <Menus menulist={this.state.menulist}> </Menus>
                    <Switch defaultChecked onChange={this.onChange} />
                </Sider>
                <Layout>
                    <Head
                        collapsed={this.state.collapsed}
                        toggle={this.toggle}
                    />
                    <Con />
                </Layout>
            </Layout>
        );
    }
}

export default Home;

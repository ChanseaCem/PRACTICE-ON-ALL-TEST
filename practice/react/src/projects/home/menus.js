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

class Menus extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const {menulist} = this.props;
        var m = menulist.map((item,index) =>{
            return (
                <Menu.Item key={index}>
                    <Icon type={item.iconType} />
                    <span>{item.nav}</span>
                </Menu.Item>
            )
        });
        return (
            <Menu theme="dark" mode="inline"  defaultSelectedKeys={["1"]} >
                {m}
            </Menu>
        );
    }
}

export default Menus;

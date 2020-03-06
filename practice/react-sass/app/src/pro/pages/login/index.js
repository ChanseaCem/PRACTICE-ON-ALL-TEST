import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import axios from 'axios';
import config from '../../config.js';

class LoginPage extends Component {
    handleSubmit = e => {
        e.preventDefault();

        let username = this.props.form.getFieldsValue().username;
        let password = this.props.form.getFieldsValue().password;

        this.props.form.validateFields((error, values) => {
            if (error) {
                return;
            }else{
                let obj = new Object();
                obj.username = username;
                obj.password = password;
                this.login(obj);
            }
        });
    };

    login = obj =>{
        axios({
            method:"POST",
            url:global.urls.BASE_URL + 'login',
            data:obj
        }).then((res) => {
            console.log(res);
        }).catch((res) => {
            console.log(res);
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator("username", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your username!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                placeholder="Username"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("password", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your Password!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="lock"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                type="password"
                                placeholder="Password"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("remember", {
                            valuePropName: "checked",
                            initialValue: true
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const Login = Form.create({ name: "normal_login" })(LoginPage);
export default Login;

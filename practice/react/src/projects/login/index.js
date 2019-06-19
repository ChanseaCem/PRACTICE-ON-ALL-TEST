import React from "react";
import { Form, Icon, Input, Button, notification, Checkbox } from "antd";
import axios from "axios";
import "../../config.js";

class LoginFiled extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                return;
            } else {
                let { getFieldsValue, getFieldValue } = this.props.form;
                let obj = new Object();
                let _name = getFieldsValue().username;
                let _pwd = getFieldsValue().password;
                obj.name = getFieldValue("username");
                obj.pwd = getFieldValue("password");
                this.login(obj);
            }
        });
    };

    login = obj => {
        axios({
            method: "post",
            url: global.urls.BASE_URL + "login",
            data: obj
        }).then(res => {
            console.log(res);
            this.openNotificationWithIcon("info", res);
        }).catch(error => {
            console.log(error);
            this.openNotificationWithIcon("info", error);
        });
    };

    openNotificationWithIcon = (type, obj) => {
        notification[type]({
            message: "提示信息",
            description: obj.data.msg,
            duration: 2,
            icon: <Icon type="smile" style={{ color: "#108ee9" }} />,
            onClose: () => {
                this.props.history.push("/home");
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator("username", {
                        rules: [
                            {
                                required: true, //是否必填
                                message: "Please input your username!" //提示消息
                            }
                        ]
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type="user"
                                    style={{ color: "rgba(0,0,0,.25)" }}
                                />
                            } //前缀logo
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
        );
    }
}

const Login = Form.create({ name: "normal_login" })(LoginFiled);
export default Login;

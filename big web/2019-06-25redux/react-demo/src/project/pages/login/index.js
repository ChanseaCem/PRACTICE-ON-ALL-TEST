import React,{Component} from 'react';
import { Form, Icon, Input, Button,notification  } from 'antd';
import './index.scss'

class LoginPage extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        let _name = this.props.form.getFieldsValue().username;   //===values
        let _psd = this.props.form.getFieldsValue().password; //===values
        console.log(_name);
        this.props.form.validateFields((err, values) => {
          if (err) {
            return;
          }else {
            if(_name ==='123' && _psd ==='123'){
                //跳转
                sessionStorage.setItem('name',_name);
                this.props.history.push("/index");
            }else {
                //提示
                this.openNotificationWithIcon('info')
            }
            // post().then(function(res){
            //     if(_name ===res.name && _psd ===res.psd){
            //         //跳转
            //     }else {
            //         //提示
            //     }
            // })
          }
        });
      };
      //弹框提示
      openNotificationWithIcon = type => {
        return notification[type]({
          message: '用户名&密码',
          description:
            '123',
          //duration:2,
          icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
        });
      };
      
    
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="loginpagewrap">
            <div className="box">
                <p>Welcome to the React</p>
                <div className="loginWrap">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input
                                type="password"
                                placeholder="password"
                            />,
                        )}
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form>
                    </div>
                </div>
            </div>
        )
    }
}
const Login = Form.create()(LoginPage);
export default Login;
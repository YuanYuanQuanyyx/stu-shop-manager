import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Card, message } from 'antd';
import './login.css';
import { loginApi } from '../services/auth';
import { setToken, setOtp_uuid } from '../utils/auth';

function Login(props) {

    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                var data = {
                    "args":{
                        "email": values.username,
                        "password": values.password
                    }
                }
                console.log(data)
                loginApi(data)
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        if (res.data.result.otp_uuid) {
                            setOtp_uuid(res.data.result.otp_uuid)
                            props.history.push('/users/admin')
                        } else if (res.data.result.token) {
                            setToken(res.data.result.token)
                            props.history.push('/users/regular')
                        }
                    }
                  }, (error) => {
                    console.log(error);
                    message.error("Incorrect User Name or Password!")
                  });
            }
        });
    };

    return (
        <Card title="Login SYS" className="login-form">
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Form.create({ name: 'loginForm' })(Login);


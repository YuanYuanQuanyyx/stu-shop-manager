import React from 'react'
import { Form, Icon, Input, Button, Card, message } from 'antd';
import './admin.css'
import { getOpt_uuid } from '../../utils/auth'
import QRcode from './twoAuth.png'
import { loginApi } from '../../services/auth';
import { setToken } from '../../utils/auth';

// Admin user, need an opt_uuid to take a second auth


function Admin(props) {
    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                var data = {
                    "args":{
                        "otp_uuid": getOpt_uuid(),
                        "otp": values.pin
                    }
                }
                console.log(data)
                loginApi(data)
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        if (res.data.result.token) {
                            setToken(res.data.result.token)
                            props.history.push('/users/regular')
                        }
                    }
                  }, (error) => {
                    console.log(error);
                    message.error("Incorrect Pin!")
                  });
            }
        });
    };

    return (
        <Card title="2FA" className="QR-code-form">
            <img width={200} src={QRcode} alt='2FA QR'/>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Item>
                {getFieldDecorator('pin', {
                    rules: [{ required: true, message: 'Please input your Pin!' }],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="pin"
                    placeholder="Pin"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Form.create({ name: 'AdminUserForm' })(Admin);


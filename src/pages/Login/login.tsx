import { SignInContainer } from './';
import { Input, Tabs, Form } from 'antd';
import { useState } from 'react';
import { email, password, confirmPassword, forgotPwd, submit } from './inputs';

const { TabPane } = Tabs;

export function Login(): JSX.Element {
    const [activeKey, setActiveKey] = useState('1');
    const [data, setData] = useState({});

    const setModel =
        (key: string) =>
        ({ target }: any) => {
            setData({
                ...data,
                [key]: target.value
            });
        };

    const onSubmit = () => {
        alert('Form submited');
    }

    const formEmail = email(setModel);
    const formPassword = password(setModel);
    const formConfirmPwd = confirmPassword(setModel);
    const formForgotPwd = forgotPwd(setActiveKey)
    const formSubmit = submit(activeKey, onSubmit);

    return (
        <SignInContainer>
            <Form
                name='basic'
                initialValues={{
                    remember: true
                }}
                layout='vertical'>
                <div className='form-container'>
                    <TabPane tab='Login' key='1'>
                        {formEmail}
                        {formPassword}
                        {formForgotPwd}
                        {formSubmit}
                    </TabPane>
                    <TabPane tab='Signup' key='2'>
                        {formEmail}
                        {formPassword}
                        {formConfirmPwd}
                        {formSubmit}
                    </TabPane>
                    {activeKey === '3' && formEmail}
                    {activeKey === '3' && formSubmit}
                </div>
            </Form>
        </SignInContainer>
    );
}

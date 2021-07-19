import { Input, Form, Button } from 'antd';

export const email = (
    setModel: (key: string) => (e: any) => void
): JSX.Element => (
    <Form.Item
        label='Email'
        name='email'
        rules={[
            {
                type: 'email',
                message: 'Please provicde a valid email address'
            },
            {
                required: true,
                message: 'Email is required'
            }
        ]}>
        <Input type='email' onChange={setModel('email')}></Input>
    </Form.Item>
);

export const password = (
    setModel: (key: string) => (e: any) => void
): JSX.Element => (
    <Form.Item
        label='Password'
        name='password'
        rules={[
            {
                required: true,
                message: 'Please enter a password'
            },
            () => ({
                validator(rules, value) {
                    if (value.length > 7) {
                        return Promise.resolve();
                    }

                    return Promise.reject(
                        'Password must be at least 8 characters long'
                    );
                }
            })
        ]}>
        <Input type='password' onChange={setModel('password')} />
    </Form.Item>
);

export const confirmPassword = (
    setModel: (key: string) => (e: any) => void
): JSX.Element => (
    <Form.Item
        label='Confirm Password'
        name='confirm-password'
        rules={[
            {
                required: true,
                message: 'Please confirm your password'
            },
            ({ getFieldValue }) => ({
                validator(rules, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }

                    return Promise.reject('Password must match');
                }
            })
        ]}>
        <Input type='password' onChange={setModel('confirmPassword')} />
    </Form.Item>
);

export const forgotPwd = (
    setActiveKey: (key: string) => void
): JSX.Element => (
    <>
        <p
            className='text-primary forgot-pwd'
            onClick={() => setActiveKey('3')}>
            Forgot your password?
        </p>
    </>
);

export const submit = (
    activeKey: string,
    onSubmit: () => void
): JSX.Element => (
    <Button htmlType='submit' onClick={onSubmit}>
        {activeKey === '1'
            ? 'Login'
            : activeKey === '2'
            ? 'Sign up'
            : 'Request Password Reset '}
    </Button>
);

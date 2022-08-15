import React, { FC } from "react"

// antd
import { Button, Form, Input, Typography } from "antd"

// hooks
import { useAppDispatch } from "hooks/useAppDispatch"
import { useTypedSelector } from "hooks/useTypedSelector"

// style
import "styles/auth/loginForm.scss"

const { Text, Title } = Typography

const LoginForm: FC = () => {
    const { login } = useAppDispatch()
    const { isError, isLoading } = useTypedSelector((state) => state.auth)

    const submitForm = (values: any) => {
        login(values.username, values.password)
    }

    const rules = (message: string) => ({
        required: true,
        message,
    })

    return (
        <div className="form-wrapper">
            {isError && (
                <div>
                    <Text type="danger">{isError}</Text>
                </div>
            )}
            <Title level={2} className="text-yellow mb2">
                Авторизация
            </Title>
            <Form
                initialValues={{ remember: true }}
                onFinish={submitForm}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    rules={[
                        rules("Пожалуйста, введите ваше имя пользователя!"),
                    ]}
                >
                    <Input placeholder="Имя ползователья" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[rules("Пожалуйста, введите ваш пароль!")]}
                >
                    <Input.Password placeholder="Пароль" />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                        className="btn"
                        ghost
                    >
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginForm

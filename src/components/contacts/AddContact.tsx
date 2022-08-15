import React, { useState } from "react"

// antd
import { Button, Form, Input } from "antd"

// hooks
import { useAppDispatch } from "hooks/useAppDispatch"

const AddContact = () => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const { setContact } = useAppDispatch()

    const onFinish = (values: any) => {
        setConfirmLoading(true)
        setTimeout(() => {
            setContact({
                key: new Date().getSeconds() + "",
                name: values.name,
                address: values.address,
            })
            setConfirmLoading(false)
        }, 1000)
    }

    const rules = (message: string) => ({
        required: true,
        message,
    })

    return (
        <Form name="basic" onFinish={onFinish} autoComplete="off">
            <Form.Item
                name="name"
                rules={[rules("Пожалуйста, заполните поля имя")]}
            >
                <Input placeholder="Имя" />
            </Form.Item>

            <Form.Item
                name="address"
                rules={[rules("Пожалуйста, заполните поля адресс")]}
            >
                <Input placeholder="Адресс" />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn"
                    loading={confirmLoading}
                    ghost
                >
                    Добавить
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AddContact

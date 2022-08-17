import React from "react"

// antd
import { Button, Form, Input } from "antd"

// hooks
import { useAppDispatch } from "hooks/useAppDispatch"

// utils
import { rules } from "utils/rules"
import { useTypedSelector } from "hooks/useTypedSelector"

interface InputValue {
    name: string
    address: string
}

const AddContact = () => {
    const { addContactAsync } = useAppDispatch()
    const { isLoading } = useTypedSelector((state) => state.contacts)

    const submitForm = (values: InputValue) => {
        addContactAsync({
            key: new Date().getSeconds() + "",
            name: values.name,
            address: values.address,
        })
    }

    return (
        <Form name="basic" onFinish={submitForm} autoComplete="off">
            <Form.Item
                name="name"
                rules={[rules.required("Пожалуйста, заполните поля имя")]}
            >
                <Input placeholder="Имя" />
            </Form.Item>

            <Form.Item
                name="address"
                rules={[rules.required("Пожалуйста, заполните поля адресс")]}
            >
                <Input placeholder="Адресс" />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn"
                    loading={isLoading}
                    ghost
                >
                    Добавить
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AddContact

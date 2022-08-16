import React, { useState } from "react"

// components
import ModalAction from "components/modal"

// antd
import { Button, Form, Input } from "antd"

// icons
import { EditOutlined } from "@ant-design/icons"

// hooks
import { useAppDispatch } from "hooks/useAppDispatch"
import { useTypedSelector } from "hooks/useTypedSelector"

const EditContact = ({ user }: any) => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [visible, setVisible] = useState(false)

    const { users } = useTypedSelector((state) => state.contacts)
    const { editContact } = useAppDispatch()

    const showModal = () => {
        setVisible(true)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const submitForm = (values: any) => {
        setConfirmLoading(true)
        setTimeout(() => {
            editContact({
                key: user.key,
                name: values.name,
                address: values.address,
            })
            setVisible(false)
            setConfirmLoading(false)
        }, 2000)
    }

    const rules = (message: string) => ({
        required: true,
        message,
    })
    return (
        <>
            <Button type="primary" onClick={() => showModal()} ghost>
                <EditOutlined />
            </Button>
            <ModalAction
                title="Редактирование адреса пользователя"
                visible={visible}
                handleCancel={handleCancel}
                confirmLoading={confirmLoading}
                footer={null}
            >
                <Form
                    name="basic"
                    onFinish={submitForm}
                    initialValues={users.find((user) => user === user)}
                    autoComplete="off"
                >
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
                            Изменить
                        </Button>
                    </Form.Item>
                </Form>
            </ModalAction>
        </>
    )
}

export default EditContact

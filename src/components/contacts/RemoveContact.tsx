import React, { useState } from "react"

// components
import ModalAction from "components/modal"

// antd
import { Button, Avatar, Card } from "antd"

// icons
import { DeleteOutlined } from "@ant-design/icons"
import { useAppDispatch } from "hooks/useAppDispatch"

const { Meta } = Card

const RemoveContact = ({ user }: any) => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [visible, setVisible] = useState(false)

    const { removeContact } = useAppDispatch()

    const showModal = () => {
        setVisible(true)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const handleOk = () => {
        setConfirmLoading(true)
        setTimeout(() => {
            setVisible(false)
            setConfirmLoading(false)
            removeContact(user.key)
        }, 1000)
    }
    return (
        <>
            <Button type="primary" onClick={() => showModal()} danger ghost>
                <DeleteOutlined />
            </Button>
            <ModalAction
                title="Удаление адреса пользователя"
                visible={visible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                confirmLoading={confirmLoading}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={user.name}
                    description={user.address}
                />
            </ModalAction>
        </>
    )
}

export default RemoveContact

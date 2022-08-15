import React, { FC } from "react"

// antd
import { Button, Space, Table, Tag } from "antd"
import type { ColumnsType } from "antd/es/table"

// hooks
import { useAppDispatch } from "hooks/useAppDispatch"
import { useTypedSelector } from "hooks/useTypedSelector"

// icons
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"

interface DataType {
    key: string
    name: string
    address: string
}

const ContactTable: FC = () => {
    const { users } = useTypedSelector((state) => state.contacts)

    console.log("users", users)

    const columns: ColumnsType<DataType> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" ghost>
                        <EditOutlined />
                    </Button>
                    <Button type="primary" danger ghost>
                        <DeleteOutlined />
                    </Button>
                </Space>
            ),
        },
    ]

    return <Table columns={columns} pagination={false} dataSource={users} />
}

export default ContactTable

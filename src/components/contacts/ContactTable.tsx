import React, { FC } from "react"

// antd
import { Space, Table } from "antd"
import type { ColumnsType } from "antd/es/table"

// hooks
import { useTypedSelector } from "hooks/useTypedSelector"

// components
import EditContact from "./EditContact"
import RemoveContact from "./RemoveContact"
import { IContact } from "models/contact"

interface DataType {
    key: string
    name: string
    address: string
}

interface ContactTableProps {
    users: IContact[]
}

const ContactTable: FC<ContactTableProps> = ({ users }) => {
    const columns: ColumnsType<DataType> = [
        {
            title: "Имя",
            dataIndex: "name",
            key: "name",
            render: (text) => <p className="text-yellow">{text}</p>,
        },
        {
            title: "Адресс",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Действия",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <EditContact user={record} />
                    <RemoveContact user={record} />
                </Space>
            ),
        },
    ]

    return (
        <>
            <Table columns={columns} pagination={false} dataSource={users} />
        </>
    )
}

export default ContactTable

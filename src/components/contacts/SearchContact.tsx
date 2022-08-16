import React, { FC, useEffect, useState } from "react"

// antd
import { Form, Input } from "antd"

// icons
import { UserOutlined } from "@ant-design/icons"

interface SearchContact {
    filter: (name: string) => void
}

const SearchContact: FC<SearchContact> = ({ filter }) => {
    const [search, setSearch] = useState("")

    useEffect(() => {
        filter(search)
    }, [search])

    return (
        <Form name="horizontal_login" layout="inline">
            <Form.Item name="name">
                <Input
                    prefix={<UserOutlined className="user-icon" />}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Username"
                />
            </Form.Item>
        </Form>
    )
}

export default SearchContact

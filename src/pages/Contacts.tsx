import React, { FC, useEffect, useState } from "react"

// antd
import { Card, Col, Layout, Row, Typography } from "antd"

// components
import ContactTable from "components/contacts/ContactTable"
import AddContact from "components/contacts/AddContact"

// styles
import "styles/contacts/contact.scss"
import SearchContact from "components/contacts/SearchContact"

// hooks
import { useTypedSelector } from "hooks/useTypedSelector"

// models
import { IContact } from "models/contact"

const { Title } = Typography

const Profile: FC = () => {
    const { users } = useTypedSelector((state) => state.contacts)
    const [data, setData] = useState<IContact[]>(users)

    const filterUsers = (name: string) => {
        const filtered = users.filter((user) => {
            if (name === "") {
                return user
            } else if (user.name?.toLowerCase().includes(name.toLowerCase())) {
                return user
            }
        })
        setData(filtered)
    }

    useEffect(() => {
        setData(users)
    }, [users])

    return (
        <Layout>
            <div className="contact mh100">
                <div className="contact__wrapper">
                    <Row>
                        <Col span={6}>
                            <Card className="left-bar">
                                <Title level={4} className="text-yellow mb4">
                                    Добавить пользователя
                                </Title>
                                <AddContact />
                            </Card>
                        </Col>
                        <Col span={18}>
                            <Card className="right-bar">
                                <div className="mb4">
                                    <SearchContact filter={filterUsers} />
                                </div>
                                <ContactTable users={data} />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </Layout>
    )
}

export default Profile

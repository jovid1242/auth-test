import React, { FC } from "react"

// antd
import { Card, Col, Layout, Row, Typography } from "antd"

// components
import ContactTable from "components/contacts/ContactTable"
import AddContact from "components/contacts/AddContact"

// styles
import "styles/contacts/contact.scss"

const { Text, Title } = Typography

const Profile: FC = () => {
    return (
        <Layout>
            <div className="contact mh100">
                <div className="contact__wrapper">
                    <Row>
                        <Col span={6}>
                            <Card className="left-bar">
                                <Title level={4} className="text-yellow mb4">
                                    Добавить адрес пользователя
                                </Title>
                                <AddContact />
                            </Card>
                        </Col>
                        <Col span={18}>
                            <Card className="right-bar">
                                <ContactTable />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </Layout>
    )
}

export default Profile

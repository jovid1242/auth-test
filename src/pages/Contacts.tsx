import React, { FC } from "react"

// antd
import { Layout, Row } from "antd"

// components
import ContactTable from "components/contacts/ContactTable"

const Profile: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="mh100">
                <ContactTable />
            </Row>
        </Layout>
    )
}

export default Profile

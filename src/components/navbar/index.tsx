import React, { FC } from "react"
import { useNavigate } from "react-router-dom"

// antd
import { Col, Layout, Menu, Row, Space } from "antd"
import { RouteName } from "router"

// hooks
import { useTypedSelector } from "hooks/useTypedSelector"
import { useAppDispatch } from "hooks/useAppDispatch"
import { AuthActionCreators } from "store/reducers/auth/actionCreators"

const Navbar: FC = () => {
    const dispatch = useAppDispatch()
    const { isAuth } = useTypedSelector((state) => state.auth)
    const navigate = useNavigate()

    return (
        <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Row>
                <Col span={22}>
                    <div className="logo">
                        <h2 style={{ color: "#fff" }}>Logo</h2>
                    </div>
                </Col>
                <Col span={2}>
                    {isAuth ? (
                        <Space>
                            <div className="" style={{ color: "#fff" }}>
                                Jovid
                            </div>
                            <Menu theme="dark" mode="horizontal">
                                <Menu.Item
                                    onClick={() =>
                                        AuthActionCreators.logout()(dispatch)
                                    }
                                    key="1"
                                >
                                    Выйти
                                </Menu.Item>
                            </Menu>
                        </Space>
                    ) : (
                        <>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                selectable={false}
                            >
                                <Menu.Item
                                    onClick={() => navigate(RouteName.LOGIN)}
                                    key="1"
                                >
                                    LOGIN
                                </Menu.Item>
                            </Menu>
                        </>
                    )}
                </Col>
            </Row>
        </Layout.Header>
    )
}

export default Navbar

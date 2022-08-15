import React from "react"

// antd
import { Layout } from "antd"

// components
import AppRouter from "components/AppRouter"
import Navbar from "components/navbar"

// styles
import "./App.css"

function App() {
    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    )
}

export default App

import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { privateRoutes, publicRoutes, RouteName } from "router"

const AppRouter = () => {
    const isAuth = false

    const getPublicRoutes = () => {
        return (
            <>
                {publicRoutes.map((route) => {
                    return (
                        <Route
                            path={route.path}
                            element={<route.element />}
                            key={route.path}
                        />
                    )
                })}
                <Route path="*" element={<Navigate to={RouteName.LOGIN} />} />
            </>
        )
    }

    const getPrivateRoutes = () => {
        return (
            <>
                {privateRoutes.map((route) => {
                    return (
                        <Route
                            path={route.path}
                            element={<route.element />}
                            key={route.path}
                        />
                    )
                })}
                <Route path="*" element={<Navigate to={RouteName.PROFILE} />} />
            </>
        )
    }

    return <Routes>{isAuth ? getPrivateRoutes() : getPublicRoutes()}</Routes>
}
export default AppRouter

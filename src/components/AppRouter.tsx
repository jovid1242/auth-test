import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { privateRoutes, publicRoutes } from "router"

const AppRouter = () => {
    const auth = false

    return (
        <Routes>
            {auth
                ? privateRoutes.map((route) => {
                      return (
                          <Route
                              key={route.path}
                              path={route.path}
                              element={<route.element />}
                          />
                      )
                  })
                : publicRoutes.map((route) => {
                      return (
                          <Route
                              key={route.path}
                              path={route.path}
                              element={<route.element />}
                          />
                      )
                  })}
        </Routes>
    )
}
export default AppRouter

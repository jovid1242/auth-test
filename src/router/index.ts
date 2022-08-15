import React from "react"

// components
import Login from "pages/Login"
import Profile from "pages/Profile"

// type rout
export interface IRoute {
    path: string
    element: React.ComponentType
    exact?: boolean
}

export enum RouteName {
    LOGIN = "/login",
    PROFILE = "/profile",
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteName.LOGIN,
        exact: true,
        element: Login,
    },
]

export const privateRoutes: IRoute[] = [
    {
        path: RouteName.PROFILE,
        exact: true,
        element: Profile,
    },
]

import { IContact } from "models/contact"

export interface ContactState {
    users: IContact[]
    isLoading: boolean
    isError: string
}

export enum ContactActions {
    ADD_CONTACT = "ADD_CONTACT",
    EDIT_CONTACT = "EDIT_CONTACT",
    DELETE_CONTACT = "DELETE_CONTACT",
    SET_IS_LOADING_C = "SET_IS_LOADING_C",
    SET_IS_ERROR = "SET_IS_ERROR",
}

export interface AddContact {
    type: ContactActions.ADD_CONTACT
    payload: IContact
}

export interface EditContact {
    type: ContactActions.EDIT_CONTACT
    payload: IContact
}

export interface DeleteContact {
    type: ContactActions.DELETE_CONTACT
    payload: string
}

export interface SetIsLoading {
    type: ContactActions.SET_IS_LOADING_C
    payload: boolean
}

export interface SetIsError {
    type: ContactActions.SET_IS_ERROR
    payload: string
}

export type ContactAction =
    | AddContact
    | EditContact
    | DeleteContact
    | SetIsLoading
    | SetIsError

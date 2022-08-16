import { IContact } from "models/contact"

export interface ContactState {
    users: IContact[]
}

export enum ContactActions {
    ADD_CONTACT = "ADD_CONTACT",
    EDIT_CONTACT = "EDIT_CONTACT",
    DELETE_CONTACT = "DELETE_CONTACT",
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

export type ContactAction = AddContact | EditContact | DeleteContact

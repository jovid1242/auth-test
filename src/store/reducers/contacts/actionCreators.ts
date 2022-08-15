// types , models
import { IContact } from "models/contact"
import { ContactActions, AddContact, DeleteContact, EditContact } from "./types"

export const ContactActionCreators = {
    setContact: (user: IContact): AddContact => ({
        type: ContactActions.ADD_CONTACT,
        payload: user,
    }),
    editContact: (user: IContact): EditContact => ({
        type: ContactActions.EDIT_CONTACT,
        payload: user,
    }),
    removeContact: (id: string): DeleteContact => ({
        type: ContactActions.DELETE_CONTACT,
        payload: id,
    }),
}

// store
import { AppDispatch } from "store"

// types & models
import { IContact } from "models/contact"
import {
    ContactActions,
    AddContact,
    DeleteContact,
    EditContact,
    SetIsLoading,
    SetIsError,
} from "./types"

export const ContactActionCreators = {
    setContact: (user: IContact): AddContact => ({
        type: ContactActions.ADD_CONTACT,
        payload: user,
    }),
    editContact: (user: IContact): EditContact => ({
        type: ContactActions.EDIT_CONTACT,
        payload: user,
    }),
    removeContact: (key: string): DeleteContact => ({
        type: ContactActions.DELETE_CONTACT,
        payload: key,
    }),
    setIsLoading: (isLoading: boolean): SetIsLoading => ({
        type: ContactActions.SET_IS_LOADING_C,
        payload: isLoading,
    }),
    setIsError: (isError: string): SetIsError => ({
        type: ContactActions.SET_IS_ERROR,
        payload: isError,
    }),
    addContactAsync: (user: IContact) => async (dispatch: AppDispatch) => {
        dispatch(ContactActionCreators.setIsLoading(true))
        try {
            setTimeout(async () => {
                if (localStorage.getItem("contacts")) {
                    let newContact: any[] = [
                        ...JSON.parse(localStorage.getItem("contacts") + ""),
                        user,
                    ]
                    localStorage.setItem("contacts", JSON.stringify(newContact))
                } else {
                    localStorage.setItem("contacts", JSON.stringify([user]))
                }

                dispatch(ContactActionCreators.setContact(user))
            }, 1000)
        } catch (e) {
            dispatch(
                ContactActionCreators.setIsError("Произошла ошибка при логине")
            )
        }
    },
    removeContactAsync: (key: string) => async (dispatch: AppDispatch) => {
        try {
            setTimeout(async () => {
                if (localStorage.getItem("contacts")) {
                    let arr: any[] = JSON.parse(
                        localStorage.getItem("contacts") + ""
                    )
                    arr.forEach((user) => {
                        if (user.key === key) {
                            let newContact: any[] = [
                                ...JSON.parse(
                                    localStorage.getItem("contacts") + ""
                                ),
                                user,
                            ]

                            localStorage.setItem(
                                "contacts",
                                JSON.stringify(newContact)
                            )

                            dispatch(ContactActionCreators.removeContact(key))
                        }
                    })
                }
            }, 1000)
        } catch (e) {
            dispatch(
                ContactActionCreators.setIsError("Произошла ошибка при логине")
            )
        }
    },
    getContact: () => async (dispatch: AppDispatch) => {
        if (localStorage.getItem("contacts")) {
            let arrContact: any[] = JSON.parse(
                localStorage.getItem("contacts") + ""
            )
            arrContact.forEach((user) => {
                dispatch(ContactActionCreators.setContact(user))
            })
        }
    },
}

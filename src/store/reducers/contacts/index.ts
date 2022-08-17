import { ContactAction, ContactActions, ContactState } from "./types"

const initialState: ContactState = {
    users: [],
    isLoading: false,
    isError: "",
}

export default function contactReduser(
    state = initialState,
    action: ContactAction
): ContactState {
    switch (action.type) {
        case ContactActions.ADD_CONTACT:
            return {
                ...state,
                users: [...state.users, action.payload],
                isLoading: false,
            }
        case ContactActions.EDIT_CONTACT:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.key === action.payload.key ? action.payload : user
                ),
            }
        case ContactActions.DELETE_CONTACT:
            return {
                ...state,
                users: state.users.filter(({ key }) => key !== action.payload),
                isLoading: false,
            }
        case ContactActions.SET_IS_LOADING_C:
            return { ...state, isLoading: action.payload }
        case ContactActions.SET_IS_ERROR:
            return { ...state, isError: action.payload, isLoading: false }
        default:
            return state
    }
}

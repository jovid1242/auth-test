import { ContactAction, ContactActions, ContactState } from "./types"

const initialState: ContactState = {
    users: [
        {
            key: "1",
            name: "John Brown",
            address: "New York No. 1 Lake Park",
        },
        {
            key: "2",
            name: "Jim Green",
            address: "London No. 1 Lake Park",
        },
        {
            key: "3",
            name: "Joe Black",
            address: "Sidney No. 1 Lake Park",
        },
    ],
}

export default function contactReduser(
    state = initialState,
    action: ContactAction
): ContactState {
    switch (action.type) {
        case ContactActions.ADD_CONTACT:
            return { ...state, users: [...state.users, action.payload] }
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
            }
        default:
            return state
    }
}

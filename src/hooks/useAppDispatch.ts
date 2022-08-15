import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { AuthActionCreators } from "store/reducers/auth/actionCreators"

export const useAppDispatch = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AuthActionCreators, dispatch)
}

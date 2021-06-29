import { userConstants } from "../../_constants/userConstants"

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                user: action.payload
            }
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: true,
                user: action.payload,
                error: null
            }
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                user: null,
                error: action.payload
            }
        case userConstants.LOGOUT:
            return {
                ...state,
                loggingIn: false,
                user: null,
            }
        default:
            return state;
    }
}
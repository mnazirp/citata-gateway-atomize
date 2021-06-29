import { userConstants } from "../../_constants/userConstants"

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = userConstants

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: { ...user }
})

export const loginFail = (message) => ({
    type: LOGIN_FAILURE,
    payload: { message }
})

export const logout = () => ({
    type: LOGOUT,
    payload: {}
})
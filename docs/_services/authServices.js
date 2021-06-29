import axios from 'axios'
import { Cookies } from 'react-cookie'
import { httpConstants } from "../_constants"

const API_URL = httpConstants.API_URL
const cookies = new Cookies()

const login = async (email, password) => {
    try {
        const response = await axios.post(API_URL + "/auth/login", { email, password })
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user_id', response.data.id)
        cookies.set("access_token", response.data.token, { path: "/" })
        return response.data
    } catch (err) {
        throw err
    }
}

export const authServices = {
    login
}
import axios from 'axios'
import { Cookies } from 'react-cookie'
import { httpConstants } from "../_constants"

const API_URL = httpConstants.API_URL

const getApis = async () => {
  try {
    return await axios.get(API_URL + '/apis', {
      headers: {'Authorization': localStorage.getItem('token')}
    });
  } catch (err) {
    throw err
  }
}

export const global = {
  getApis
}
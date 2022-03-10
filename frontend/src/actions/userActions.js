import axios from "axios";
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

} from "../constants/userConstant";

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        const {data} = await axios.post(
            '/auth/jwt/create/',
            {'username': username, 'password': password},
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
}
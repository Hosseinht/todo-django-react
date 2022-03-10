import axios from "axios";
import {
    TODO_LIST_REQUEST,
    TODO_LIST_SUCCESS,
    TODO_LIST_FAIL,
    TODO_CREATE_REQUEST,
    TODO_CREATE_SUCCESS,
    TODO_CREATE_FAIL
} from "../constants/todoConstants";

export const listTodos = () => async (dispatch, getState) => {
    try {
        dispatch({type: TODO_LIST_REQUEST})
        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization: `JWT ${userInfo.access}`
            }
        }
        const {data} = await axios.get(
            '/api/todo/',
            config
        )
        dispatch({
            type: TODO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TODO_LIST_FAIL,
            payload: error.response
        })
    }
}


export const createTodo = (todo) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TODO_CREATE_REQUEST
        })
        console.log(todo)
        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization: `JWT ${userInfo.access}`,
            }
        }
        console.log(userInfo.access)
        const {data} = await axios.post(
            '/api/todo/',
            todo,
            config,
        )

        dispatch({
            type: TODO_CREATE_SUCCESS,
            payload: data,

        })

    } catch (error) {
        dispatch({
            type: TODO_CREATE_FAIL,
            payload: error.response

        })
    }
}

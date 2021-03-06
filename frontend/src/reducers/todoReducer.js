import {
    TODO_LIST_REQUEST,
    TODO_LIST_SUCCESS,
    TODO_LIST_FAIL,
    TODO_CREATE_REQUEST,
    TODO_CREATE_SUCCESS,
    TODO_CREATE_FAIL
} from "../constants/todoConstants";


export const todoListReducer = (state = {todos: []}, action) => {
    switch (action.type) {
        case TODO_LIST_REQUEST:
            return {loading: true, todos: []}
        case TODO_LIST_SUCCESS:
            return {loading: false, todos: action.payload}
        case TODO_LIST_FAIL:
            return {loading: false, todos: action.payload}
        default:
            return state
    }
}

export const todoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TODO_CREATE_REQUEST:
            return {
                loading: true
            }
        case TODO_CREATE_SUCCESS:
            return {

                loading: false,
                success: true,
                todo: action.payload
            }
        case TODO_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
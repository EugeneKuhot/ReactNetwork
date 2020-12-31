import {AuthAPI} from "../components/api/api";
import {stopSubmit} from "redux-form";


const SET_AUTH = 'SET_AUTH'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}

export const setAuth = (id, login, email, isAuth) => ({
    type: SET_AUTH, data: {
        id,
        login,
        email,
        isAuth
    }
})

export const authCheck = () => {
    return (dispatch) => {
        AuthAPI.authCheck()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data
                    dispatch(setAuth(id, login, email, true))
                }

            })
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        AuthAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authCheck())
                }else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        AuthAPI.logout()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuth(null, null, null, false))
                }
            })
    }
}

export default authReducer
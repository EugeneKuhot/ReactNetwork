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
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}


export const setAuth = (id, login, email) => ({
    type: SET_AUTH, data: {
        id,
        login,
        email
    }
})

export default authReducer
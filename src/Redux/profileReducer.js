import {ProfileAPI} from "../components/api/api"

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postsData: [
        {id: 1, message: 'Hi. How are you', likes: 12},
        {id: 2, message: 'Fine thnx', likes: 122}
    ],
    profile: null,
    status: ``
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: action.newPostText,
                likes: 0
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPostAC = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const setProfile = (userId) => {
    return (dispatch) => {

        ProfileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}


export default profileReducer
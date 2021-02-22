import {ProfileAPI} from "../components/api/api"
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO = 'SET_PHOTO'

let initialState = {
    postsData: [
        {id: 1, message: 'Hi. How are you', likes: 12},
        {id: 2, message: 'Fine thnx', likes: 122}
    ],
    profile: null,
    status: ``
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}

            }
        default:
            return state
    }
}

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setPhoto = (photos) => ({type: SET_PHOTO, photos})

export const setProfile = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const addPhoto = (file) => async (dispatch) => {
    let response = await ProfileAPI.sendPhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos))
    }
}
export const saveProfileData = (formData) => async (dispatch, getState) => {
    const userId = getState().authData.id
    let response = await ProfileAPI.updateProfileData(formData)
    if (response.data.resultCode === 0) {
        dispatch(setProfile(userId))
    }else {
        dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}))
    }
}

export default profileReducer
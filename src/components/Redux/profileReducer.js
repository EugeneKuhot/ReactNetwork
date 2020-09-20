const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        {id: 1, message: 'Hi. How are you', likes: 12},
        {id: 2, message: 'Fine thnx', likes: 122}
    ],
    newPostText: 'test'
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            let stateCopy = {...state}
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = ''

            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText

            return stateCopy
        }
        default:
            return state
    }
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer
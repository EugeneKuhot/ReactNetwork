const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi. How are you', likes: 12},
                {id: 2, message: 'Fine thnx', likes: 122}
            ],
            newPostText: 'test'
        },
        messagesPage: {
            dialogsData:  [
                {
                    id: 1,
                    name: 'Vasya',
                    avatar: 'https://data.whicdn.com/images/89749317/original.png'
                },
                {
                    id: 2,
                    name: 'Ivan',
                    avatar: 'https://creators-images.vice.com/content-images/contentimage/no-slug/98ed59080aa70a58e581e341769349bb.jpg'},
                {
                    id: 3,
                    name: 'Petr',
                    avatar: 'https://lh3.googleusercontent.com/proxy/Vyr2Tu5daj2Jwz9C-CqwHSQHEYE33EAPTcoMlvhPFfwGzwBT8JYoSf-zOIxVKYX9-eMrxbupPMmNCA-XhKQfs_e3vg1V_pH4DtKF6a0tIUCSTK8GyhoxUxP75M67CpDhhBtaR7OkTQqoTyanvw'
                },
                {
                    id: 4,
                    name: 'Grisha',
                    avatar: 'https://creators-images.vice.com/content-images/contentimage/no-slug/445fae41e83cbf62cb006e736b54637a.jpg'
                }
            ],
            messagesData: [
                {id: 1, textMessage: 'Hi'},
                {id: 2, textMessage: 'Where are you'}
            ]
        }
    },
    _callSubscriber() {
        alert('test')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store
window.store = store
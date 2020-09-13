const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'


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
                    avatar: 'https://posterspy.com/wp-content/uploads/2014/07/10247352_10200924919284968_2948106246049733614_n.png'
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
            ],

            newMessageText: ''
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
        }else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 3,
                textMessage: this._state.messagesPage.newMessageText,
            }
            this._state.messagesPage.messagesData.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageAC = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextAC = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default store
window.store = store
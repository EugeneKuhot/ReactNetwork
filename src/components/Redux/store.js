import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.messagesPage, action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store
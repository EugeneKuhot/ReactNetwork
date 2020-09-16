const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 3,
                textMessage: state.newMessageText,
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state

        default:
            return state
    }
}

export const sendMessageAC = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextAC = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer
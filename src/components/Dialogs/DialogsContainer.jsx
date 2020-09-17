import React from 'react'
import {sendMessageAC, updateNewMessageTextAC} from "../Redux/dialogsReducer"
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState()

    let sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextAC(text))
    }

    return (
        <Dialogs dialogsData={state.messagesPage.dialogsData} messagesData={state.messagesPage.messagesData}
                 sendMessage={sendMessage} onMessageChange={onMessageChange} newMessageText={state.messagesPage.newMessageText}/>
    )
}

export default DialogsContainer
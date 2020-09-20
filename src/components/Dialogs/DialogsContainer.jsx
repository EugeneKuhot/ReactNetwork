import React from 'react'
import {sendMessageAC, updateNewMessageTextAC} from "../Redux/dialogsReducer"
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {



    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState()

                    let sendMessage = () => {
                        store.dispatch(sendMessageAC())
                    }

                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextAC(text))
                    }

                    return (
                        <Dialogs dialogsData={state.messagesPage.dialogsData}
                                 messagesData={state.messagesPage.messagesData}
                                 sendMessage={sendMessage} onMessageChange={onMessageChange}
                                 newMessageText={state.messagesPage.newMessageText}/>
                    )
                }

            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer
import React from 'react'
import {sendMessageAC, updateNewMessageTextAC} from "../../Redux/dialogsReducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {dispatch(sendMessageAC())},
        onMessageChange: (text) => {dispatch(updateNewMessageTextAC(text))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer
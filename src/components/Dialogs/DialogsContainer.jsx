import React from 'react'
import {sendMessageAC, updateNewMessageTextAC} from "../../Redux/dialogsReducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"
import {WithAuthRedirect} from "../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {dispatch(sendMessageAC())},
        onMessageChange: (text) => {dispatch(updateNewMessageTextAC(text))}
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)

export default DialogsContainer
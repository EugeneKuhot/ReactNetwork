import React from 'react'
import {sendMessageAC} from "../../Redux/dialogsReducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {dispatch(sendMessageAC(newMessageBody))}
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)
import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem"
import MessageItem from "./MessageItem/MessageItem"
import {sendMessageAC, updateNewMessageTextAC} from "../Redux/dialogsReducer";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesElements = props.messagesData.map(m => <MessageItem textMessage={m.textMessage}/>)

    let sendMessage = () => {
        props.dispatch(sendMessageAC())
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewMessageTextAC(text))
    }

    return (
        <div className={s.dialogsPage}>
            <ul className={s.dialogList}>
                {dialogsElements}
            </ul>
            <ul className={s.messagesList}>
                {messagesElements}

                <li className={s.textareaWrap}>
                    <textarea placeholder='Enter your message...'
                              value={props.newMessageText}
                              onChange={onMessageChange}
                              name="" id="" cols="30" rows="10"></textarea>
                    <button onClick={sendMessage}>Send</button>
                </li>
            </ul>
        </div>

    )
}

export default Dialogs
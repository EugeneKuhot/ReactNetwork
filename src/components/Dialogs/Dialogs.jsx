import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData
        .map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messagesElements = props.messagesData
        .map(m => <MessageItem textMessage={m.textMessage}/>)

    return (
        <div className={s.dialogsPage}>
            <ul className={s.dialogList}>
                {dialogsElements}
            </ul>
            <ul className={s.messagesList}>
                {messagesElements}
            </ul>
        </div>

    )
}

export default Dialogs
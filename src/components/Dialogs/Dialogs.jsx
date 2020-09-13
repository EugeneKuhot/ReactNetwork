import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData
        .map(d => <DialogsItem name={d.name} id={d.id} avatar={d.avatar}/>)

    let messagesElements = props.messagesData
        .map(m => <MessageItem textMessage={m.textMessage}/>)

    let newMessage =  React.createRef()

    let sendMessage = () => {
        let textMessage = newMessage.current.value
        alert(textMessage)
    }

    return (
        <div className={s.dialogsPage}>
            <ul className={s.dialogList}>
                {dialogsElements}
            </ul>
            <ul className={s.messagesList}>
                {messagesElements}

                <li className={s.textareaWrap}>
                    <textarea ref={newMessage} name="" id="" cols="30" rows="10"></textarea>
                    <button onClick={sendMessage}>Send</button>
                </li>
            </ul>
        </div>

    )
}

export default Dialogs
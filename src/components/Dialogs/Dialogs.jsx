import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import Post from "../Profile/Posts/Post/Post";


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Petr'},
        {id: 4, name: 'Grisha'}
    ]

    let messagesData = [
        {id: 1, textMessage: 'Hi'},
        {id: 2, textMessage: 'Where are you'}
    ]

    let dialogsElements = dialogsData
        .map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messagesElements = messagesData
        .map(m => <Post message={m.textMessage}/>)

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
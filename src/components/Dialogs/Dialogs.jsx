import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem"
import MessageItem from "./MessageItem/MessageItem"
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators";


const MAX_SYMBOLS_IN_MESSAGE = 10
const messageMaxLengthCreator = maxLengthCreator(MAX_SYMBOLS_IN_MESSAGE)

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}
                                                                  avatar={d.avatar}/>)
    let messagesElements = props.messagesData.map(m => <MessageItem textMessage={m.textMessage} key={m.id}/>)

    let sendMessage = (formData) => {
        props.sendMessage(formData.newMessageBody);
    }

    return (
        <div className={s.dialogsPage}>
            <ul className={s.dialogList}>
                {dialogsElements}
            </ul>
            <ul className={s.messagesList}>
                {messagesElements}

                <li className={s.textareaWrap}>
                    <AddMessageReduxForm onSubmit={sendMessage}/>
                </li>
            </ul>
        </div>
    )
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   validate={[required, messageMaxLengthCreator]}
                   name={'newMessageBody'}
                   placeholder='Enter your message...'/>
            <button>Send</button>
        </form>
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs
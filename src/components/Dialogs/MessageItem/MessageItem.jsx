import s from "../Dialogs.module.css";
import React from "react";


const MessageItem = (props) => {
    return (
        <li className={s.messageItem}>
            {props.textMessage}
        </li>
    )
}

export default MessageItem
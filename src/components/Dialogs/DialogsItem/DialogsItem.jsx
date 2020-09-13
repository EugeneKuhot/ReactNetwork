import React from "react"
import s from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom"

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <li className={s.dialogItem + ' ' + s.active}>
            <img src={props.avatar} alt=""/>
            <NavLink to={path} activeClassName={s.active} >
                {props.name}
            </NavLink>
        </li>
    )
}

export default DialogsItem
import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className={s.navigation}>
            <ul>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
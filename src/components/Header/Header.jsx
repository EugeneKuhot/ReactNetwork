import React from 'react'
import s from './Header.module.css'
import tree from '../../assets/images/gif/tree.gif'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.appLogo}>
                <img src={tree} alt="Logo"/>
            </div>

            <div className={s.headerAuthWrap}>
                {props.authData.isAuth ? props.authData.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header
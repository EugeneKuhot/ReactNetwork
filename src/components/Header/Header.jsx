import React from 'react'
import s from './Header.module.css'
import tree from '../../assets/images/gif/tree.gif'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.appLogo}>
                <img src={tree} alt="Logo"/>
            </div>
        </header>
    )
}

export default Header
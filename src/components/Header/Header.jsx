import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.appLogo}>
                <img src="https://thumbs.gfycat.com/ColorlessImpoliteCattle-max-1mb.gif" alt=""/>
            </div>
        </header>
    )
}

export default Header
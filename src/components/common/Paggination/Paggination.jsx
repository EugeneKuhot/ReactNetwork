import React from 'react'
import s from './Paggination.module.css'

const Paggination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageLimit)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <ul className={s.pagginationList}>
            {
                pages.map(p => {
                    return <li className={props.currentPage === p ? s.active : ``} key={p} onClick={() => {
                        props.onPageChanged(p)
                    }}>
                        <button>{p}</button>
                    </li>
                })
            }

        </ul>
    )
}

export default Paggination
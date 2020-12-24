import React from "react"
import s from "./Users.module.css"
import userAvatar from "../../assets/images/user.jpg"
import {NavLink} from "react-router-dom"
import {UsersAPI} from "../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageLimit)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <section>
            <ul className={s.usersList}>
                {props.users.map(u => <li key={u.id} className={s.userItem}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userAvatar} className={s.avatar}
                                 alt=""/>
                        </NavLink>
                        <span>{u.name}</span>
                        <span>{u.status}</span>

                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>

                </li>)}
            </ul>

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
        </section>
    )
}

export default Users
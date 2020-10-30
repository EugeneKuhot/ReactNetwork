import React from "react";
import s from "./Users.module.css";
import userAvatar from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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

                        {u.follow
                            ? <button onClick={() => {
                                props.unfollowRequest(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.followRequest(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }}>Follow</button>}
                    </div>

                </li>)}
            </ul>

            <ul className={s.pagginationList}>
                {
                    pages.map(p => {
                        return <li className={props.currentPage === p ? s.active : null} key={p} onClick={() => {
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
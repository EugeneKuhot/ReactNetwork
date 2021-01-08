import React from 'react'
import s from './Users.module.css'
import userAvatar from '../../assets/images/user.jpg'
import {NavLink} from 'react-router-dom'

const User = ({user, followingInProgress, unfollow, follow}) => {
    let u = user
    return (
        <li className={s.userItem}>
            <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small !== null ? u.photos.small : userAvatar} className={s.avatar}
                     alt=''/>
            </NavLink>
            <span>{user.name}</span>
            <span>{user.status}</span>

            {u.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              unfollow(u.id)
                          }}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              follow(u.id)
                          }}>Follow</button>}
        </li>
    )
}

export default User
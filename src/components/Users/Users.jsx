import React from 'react'
import s from './Users.module.css'
import Paggination from '../common/Paggination/Paggination'
import User from './User'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageLimit)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <section>
            <ul className={s.usersList}>
                {props.users.map(u => <User key={u.id}
                                            user={u}
                                            followingInProgress={props.followingInProgress}
                                            unfollow={props.unfollow}
                                            follow={props.follow}/>)}
            </ul>

            <Paggination totalUsersCount={props.totalUsersCount}
                         pageLimit={props.pageLimit}
                         currentPage={props.currentPage}
                         onPageChanged={props.onPageChanged}/>
        </section>
    )
}

export default Users

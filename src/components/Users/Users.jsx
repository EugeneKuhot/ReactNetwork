import React from "react"
import s from "./Users.module.css"
import * as axios from "axios";
import userAvatar from "../../assets/images/user.jpg"

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    return (

        <section>
            <button onClick={getUsers}>Get users</button>

            <ul>
                {props.users.map(u => <li key={u.id}>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userAvatar} className={s.avatar} alt=""/>
                        {u.follow
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>

                    <div>
                        <span>{u.name}</span>
                        <span>{u.status}</span>
                        <span>{"u.location.city"}</span>
                        <span>{"u.location.country"}</span>
                    </div>
                </li>)}
            </ul>
        </section>

    )
}

export default Users
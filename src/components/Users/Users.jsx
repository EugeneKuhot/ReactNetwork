import React from "react";
import userAvatar from "../../assets/images/user.jpg";
import s from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <section>
                <ul>
                    {this.props.users.map(u => <li key={u.id}>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userAvatar} className={s.avatar}
                                 alt=""/>
                            {u.follow
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}

                        </div>

                        <div>
                            <span>{u.name}</span>
                            <span>{u.status}</span>
                        </div>
                    </li>)}
                </ul>
            </section>

        )
    }
}

export default Users
import React from "react";
import userAvatar from "../../assets/images/user.jpg";
import s from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageLimit}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageLimit}`)
            .then(response => {this.props.setUsers(response.data.items)})
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageLimit)

        let pages = []

        for (let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }



        return (
            <section>
                <ul className={s.pagginationList}>
                    {
                        pages.map(p => {
                            return <li className={this.props.currentPage === p && s.active} key={p} onClick={() => {this.onPageChanged(p)}}>
                                <button>{p}</button>
                            </li>
                        })
                    }
                </ul>

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
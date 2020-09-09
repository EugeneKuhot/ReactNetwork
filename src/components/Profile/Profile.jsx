import React from "react"
import s from './Profile.module.css'
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <section className={s.content}>
            <div>banner</div>
            <div>ava + desc</div>

            <Posts />
        </section>
    )
}

export default Profile
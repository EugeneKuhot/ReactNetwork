import React from "react"
import s from '../Profile.module.css'
import Posts from "../Posts/Posts";

const ProfileInfo = () => {
    return (
        <section>
            <div className={s.profileBackground}></div>
            <div>ava + desc</div>
        </section>
    )
}

export default ProfileInfo
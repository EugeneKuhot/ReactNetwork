import React from "react"
import s from './Profile.module.css'

const Profile = () => {
    return (
        <section className={s.content}>
            <div>banner</div>
            <div>ava + desc</div>
            <ul>
                <li>post1</li>
                <li>post2</li>
            </ul>
        </section>
    )
}

export default Profile
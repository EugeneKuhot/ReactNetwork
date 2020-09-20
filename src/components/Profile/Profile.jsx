import React from "react"
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {
    return (
        <section className={s.profileWrap}>
            <ProfileInfo />
            <PostsContainer/>
        </section>
    )
}

export default Profile
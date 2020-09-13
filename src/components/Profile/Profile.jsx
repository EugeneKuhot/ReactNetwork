import React from "react"
import s from './Profile.module.css'
import Posts from "./Posts/Posts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {
    return (
        <section className={s.profileWrap}>
            <ProfileInfo />
            <Posts postsData={props.postsData}
                   addPost={props.addPost}
                   newPostText={props.newPostText}
                   updatePostText={props.updatePostText}/>
        </section>
    )
}

export default Profile
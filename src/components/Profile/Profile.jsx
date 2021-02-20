import React from "react"
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import PostsContainer from "./Posts/PostsContainer"


const Profile = (props) => {
    return (
        <section className={s.profileWrap}>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         addPhoto={props.addPhoto}/>
            <PostsContainer/>
        </section>
    )
}

export default Profile
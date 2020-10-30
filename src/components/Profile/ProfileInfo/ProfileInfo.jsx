import React from "react"
import s from '../Profile.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <section>
            <div className={s.profileBackground}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
           <div>
               <h3>About me: {props.profile.aboutMe}</h3>

               <ul>
                   <li>Facebook: {props.profile.contacts.facebook}</li>
                   <li>Website: {props.profile.contacts.website}</li>
                   <li>VK: {props.profile.contacts.vk}</li>
                   <li>Twitter: {props.profile.contacts.twitter}</li>
                   <li>Instagram: {props.profile.contacts.instagram}</li>
                   <li>Youtube: {props.profile.contacts.youtube}</li>
                   <li>Github: {props.profile.contacts.github}</li>
                   <li>Other link: {props.profile.contacts.mainLink}</li>
               </ul>
           </div>


        </section>
    )
}

export default ProfileInfo
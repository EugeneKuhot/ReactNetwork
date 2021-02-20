import React, {useState} from "react"
import s from '../Profile.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userAvatar from "../../../assets/images/user.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onPhotoAdd = (e) => {
        if (e.target.files.length) {
            props.addPhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <section>
            <div className={s.profileBackground}>
                <img src={props.profile.photos.large || userAvatar} alt="" width={300}/>
                {props.isOwner && <input type={'file'} onChange={onPhotoAdd}/>}
            </div>
            <div>
                <ProfileStatusWithHooks statuse={props.status} updateStatus={props.updateStatus}/>
                <h3>{props.profile.aboutMe}</h3>
                {editMode ? <ProfileDataForm profile={props.profile} onSubmit={onSubmit}/> : <ProfileData profile={props.profile}
                                                                                      isOwner={props.isOwner}
                                                                                      editMode={() => {setEditMode(true)}}
                                                                                      />}

            </div>
        </section>
    )
}

const ProfileData = (props) => {
    return (
        <ul>
            {props.isOwner && <li><button onClick={props.editMode}>Edit</button></li>}
            <li>Name: {props.profile.fullName}</li>
            <li>Looking for a job: {props.profile.lookingForJob ? <span>Yes</span> : <span>No</span>}</li>
            <li>About me: {props.profile.lookingForAJobDescription}</li>

            <li>Contacts:</li>
            <li>
                {Object.keys(props.profile.contacts).map(key => {

                    return <Contact key={key} contactTitle={key}
                                    contactValue={props.profile.contacts[key]}/>
                })}
            </li>
        </ul>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo
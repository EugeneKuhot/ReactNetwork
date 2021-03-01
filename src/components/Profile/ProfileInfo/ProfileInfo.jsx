import React, {useState} from "react"
import s from '../Profile.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userAvatar from "../../../assets/images/user.jpg";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProflileData";

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
        props.saveProfileData(formData)
        setEditMode(false)
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
                {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> : <ProfileData profile={props.profile}
                                                                                      isOwner={props.isOwner}
                                                                                      editMode={() => {setEditMode(true)}}
                                                                                      />}

            </div>
        </section>
    )
}



export default ProfileInfo
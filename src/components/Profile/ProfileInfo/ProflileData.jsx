import React from "react";

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

export default ProfileData
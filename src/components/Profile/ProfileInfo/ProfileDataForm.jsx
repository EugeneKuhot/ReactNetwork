import React from "react"
import {createField, Input, Textarea} from "../../common/FormControls/FormControls"
import {reduxForm} from "redux-form"
import {required} from "../../../utils/validators"
import s from "../../common/FormControls/FormControls.module.css"

const profileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <button>Save</button>
                </li>
                { error && <div className={s.summaryErrorBlock}>
                    {error}
                </div>}
                <li>Name: {createField(Input, [], 'fullName', 'fullName', 'text')}</li>
                <li>Looking for a job:
                    {createField(Input, [required], 'lookingForJob', '', 'checkbox')} Yes
                </li>
                <li>Job desc: {createField(Textarea, [required], 'lookingForAJobDescription', 'My professional skills','')}</li>

                <li>About me: {createField(Textarea, [required], 'aboutMe', 'About me','')}</li>

                <li>Contacts:</li>
                <li>
                     {Object.keys(profile.contacts).map(key => {
                        return <div key={key}>
                            {key}: {createField(Input, [], 'contacts' + key, key,'')}
                        </div>
                    })}
                </li>
            </ul>
        </form>
    )
}

const profileDataReduxForm = reduxForm({form: 'editProfile'})(profileDataForm)

export default profileDataReduxForm
import React from "react";
import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";

const profileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <ul>
                <li>
                    <button>Save</button>
                </li>
                <li>Name: {createField(Input, [], 'fullName', 'fullName', 'text')}</li>
                <li>Looking for a job:
                    <label>{createField(Input, [], 'lookingForJob', '', 'checkbox')} Yes</label>
                </li>
                <li>About me: {createField(Textarea, [], 'AboutMe', 'My professional skills','')}</li>

                <li>Contacts:</li>
                <li>
                    {/* {Object.keys(props.profile.contacts).map(key => {

                        return <Contact key={key} contactTitle={key}
                                        contactValue={props.profile.contacts[key]}/>
                    })}*/}
                </li>
            </ul>
        </form>
    )
}

const profileDataReduxForm = reduxForm({form: 'editProfile'})(profileDataForm)

export default profileDataReduxForm
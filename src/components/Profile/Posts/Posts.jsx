import React from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const MAX_SYMBOLS_IN_POST = 10
const postMaxLengthCreator = maxLengthCreator(MAX_SYMBOLS_IN_POST)

const Posts = React.memo(props => {

    let postElements = props.postsData
        .map(p => <Post message={p.message} likes={p.likes} key={p.id}/>)

    let addPost = (formData) => {
        props.addPost(formData.newPostBody)
    }

    return (
        <ul>
            <li className={s.textareaWrap}>
                <ProfilePostReduxForm onSubmit={addPost}/>
            </li>

            {postElements}
        </ul>
    )
});

const ProfilePostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
               name={`newPostBody`}
               placeholder={`Type here...`}
               validate={[required, postMaxLengthCreator]}/>
        <button>Add Post</button>
    </form>
}

const ProfilePostReduxForm = reduxForm({
    form: `newPost`
})(ProfilePostForm)

export default Posts

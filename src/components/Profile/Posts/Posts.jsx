import React, {createRef} from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'
import {Field, reduxForm} from "redux-form";

const Posts = (props) => {

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
}

const ProfilePostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={`textarea`} name={`newPostBody`} placeholder={`Type here...`}/>
        <button>Add Post</button>
    </form>
}

const ProfilePostReduxForm = reduxForm({
    form: `newPost`
})(ProfilePostForm)

export default Posts

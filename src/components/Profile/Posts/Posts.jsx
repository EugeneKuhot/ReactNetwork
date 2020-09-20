import React, {createRef} from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = (props) => {

    let postElements = props.postsData
        .map(p => <Post message={p.message} likes={p.likes} key={p.id}/>)

    let newPost = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPost.current.value
        props.updateNewPostTextAC(text)
    }


    return (
        <ul>
            <li className={s.textareaWrap}>
                <textarea ref={newPost} name="" id="" cols="30" rows="10" onChange={onPostChange}
                          value={props.newPostText}/>
                <button onClick={addPost}>Add Post</button>
            </li>

            {postElements}
        </ul>
    )
}

export default Posts

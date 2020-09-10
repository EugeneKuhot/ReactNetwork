import React from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = (props) => {

    let postElements = props.postsData
        .map(p => <Post message={p.message} likes={p.likes}/>)

    return (
        <ul>
            <li className={s.textareaWrap}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Post</button>
            </li>

            {postElements}
        </ul>
    )
}

export default Posts

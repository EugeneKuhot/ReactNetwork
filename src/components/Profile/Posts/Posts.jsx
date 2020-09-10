import React from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'

const Posts = () => {

    let postsData = [
        {id: 1, message: 'Hi. How are you', likes: 12},
        {id: 2, message: 'Fine thnx', likes: 122}
    ]

    let postElements = postsData
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

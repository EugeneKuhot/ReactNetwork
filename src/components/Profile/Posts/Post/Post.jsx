import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <li className={s.post}>
            <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
            {props.message}
            <div>
                {props.likes} likes
            </div>

        </li>
    )
}

export default Post
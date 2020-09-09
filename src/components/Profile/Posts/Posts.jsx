import React from "react"
import Post from "./Post/Post";

const Posts = () => {
    return (
        <ul>
            <li>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Post</button>
            </li>

            <Post message='Hi. How are you' likes='25' />
            <Post message='Fine thnx' likes='23' />
        </ul>
    )
}

export default Posts

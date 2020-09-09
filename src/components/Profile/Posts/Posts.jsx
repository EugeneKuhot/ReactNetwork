import React from "react"
import Post from "./Post/Post";

const Posts = () => {
    return (
        <ul>
            <li>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Post</button>
            </li>

            <Post />
        </ul>
    )
}

export default Posts

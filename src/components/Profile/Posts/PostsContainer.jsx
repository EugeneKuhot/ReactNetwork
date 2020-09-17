import React from 'react'
import {addPostAC, updateNewPostTextAC} from "../../Redux/profileReducer";
import Posts from "./Posts";

const PostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }


    return (
        <Posts updateNewPostTextAC={onPostChange} addPost={addPost} postsData={state.profilePage.postsData}
               newPostText={state.profilePage.newPostText} />)
}

export default PostsContainer

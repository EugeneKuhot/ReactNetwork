import React from 'react'
import {addPostAC, updateNewPostTextAC} from "../../Redux/profileReducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

const PostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let state = store.getState()

                let addPost = () => {
                    store.dispatch(addPostAC())
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextAC(text))
                }
                return (
                    <Posts updateNewPostTextAC={onPostChange}
                           addPost={addPost} postsData={state.profilePage.postsData}
                           newPostText={state.profilePage.newPostText}/>
                )

            }
        }
        </StoreContext.Consumer>
    )
}

export default PostsContainer

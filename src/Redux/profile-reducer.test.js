import profileReducer, {addPostAC} from "./profileReducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";

test('length of posts should be incremented', () => {
    let action = addPostAC(`add post test`)
    let initialState = {
        postsData: [
            {id: 1, message: 'Hi. How are you', likes: 12},
            {id: 2, message: 'Fine thnx', likes: 122}
        ]
    }

    let newState = profileReducer(initialState, action)

    expect(newState.postsData.length).toBe(3)
})


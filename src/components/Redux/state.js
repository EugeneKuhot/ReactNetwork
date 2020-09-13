let rerenderEntireTree = () => {

}

let state = {

    profilePage: {
        postsData: [
            {id: 1, message: 'Hi. How are you', likes: 12},
            {id: 2, message: 'Fine thnx', likes: 122}
        ],
        newPostText: 'test'
    },

    messagesPage: {
        dialogsData:  [
            {
                id: 1,
                name: 'Vasya',
                avatar: 'https://data.whicdn.com/images/89749317/original.png'
            },
            {
                id: 2,
                name: 'Ivan',
                avatar: 'https://creators-images.vice.com/content-images/contentimage/no-slug/98ed59080aa70a58e581e341769349bb.jpg'},
            {
                id: 3,
                name: 'Petr',
                avatar: 'https://lh3.googleusercontent.com/proxy/Vyr2Tu5daj2Jwz9C-CqwHSQHEYE33EAPTcoMlvhPFfwGzwBT8JYoSf-zOIxVKYX9-eMrxbupPMmNCA-XhKQfs_e3vg1V_pH4DtKF6a0tIUCSTK8GyhoxUxP75M67CpDhhBtaR7OkTQqoTyanvw'
            },
            {
                id: 4,
                name: 'Grisha',
                avatar: 'https://creators-images.vice.com/content-images/contentimage/no-slug/445fae41e83cbf62cb006e736b54637a.jpg'
            }
        ],
        messagesData: [
            {id: 1, textMessage: 'Hi'},
            {id: 2, textMessage: 'Where are you'}
        ]
    }

}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}


export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state

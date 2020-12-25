import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '38f6e9f2-1b51-441e-92a2-145c5d6036b5'
    }
})


export const UsersAPI = {
    getUsers(currentPage = 1, pageLimit = 10) {
        return (
            instance.get(`users?page=${currentPage}&count${pageLimit}`)
                .then(response => response.data)
        )
    },

    follow(userId) {
        return (
            instance.post(`follow/${userId}`).then(response => response.data)
        )
    },

    unfollow(userId) {
        return (
            instance.delete(`follow/${userId}`).then(response => response.data)
        )
    },

    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`)
        )
    }
}

export const AuthAPI = {
    authCheck() {
        return (
            instance.get(`auth/me`).then(response => response.data)
        )
    }
}












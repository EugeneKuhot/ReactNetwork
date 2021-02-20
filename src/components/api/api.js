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
    }

}

export const ProfileAPI = {
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`)
        )
    },

    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
        )
    },

    updateStatus(status) {
        return (
            instance.put(`profile/status`, {status: status})
        )
    },

    sendPhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return (
            instance.put(`profile/photo`, formData, {
                headers: {
                    "Content-Type":"multipart/form-data"
                }
            })
        )
    }
}

export const AuthAPI = {
    authCheck() {
        return (
            instance.get(`auth/me`).then(response => response.data)
        )
    },
    login(email, password, rememberMe = false) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe})
        )
    },
    logout() {
        return (
            instance.delete(`auth/login`).then(response => response.data)
        )
    }
}












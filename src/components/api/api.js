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
            instance.get(`users?page=${currentPage}&count${pageLimit}`, {
                withCredentials: true
            })
                .then(response => response.data)
        )
    },

    /*follow(userId) {
        return (
            instance.post(`follow/${userId}`).then(response => response.data)
        )
    },

    unfollow(userId) {
        instance.delete(`follow/${userId}`).then(response => response.data)
    }*/
}












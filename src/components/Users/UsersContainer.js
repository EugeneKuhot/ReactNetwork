import React from "react"
import {connect} from "react-redux"
import UsersAPIComponent from "./UsersAPIComponent"
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../Redux/usersReducer"
import {WithAuthRedirect} from "../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageLimit: state.usersPage.pages,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


let AuthRedirectComponent = WithAuthRedirect(UsersAPIComponent)

export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, getUsers})(AuthRedirectComponent)


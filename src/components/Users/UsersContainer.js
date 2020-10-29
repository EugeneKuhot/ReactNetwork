import React from "react"
import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../Redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageLimit: state.usersPage.pages,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {setUsers, follow, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersAPIComponent)


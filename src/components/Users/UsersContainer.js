import React from "react"
import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
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

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {dispatch(setUsersAC(users))},
        follow: (userID) => {dispatch(followAC(userID))},
        unfollow: (userID) => {dispatch(unfollowAC(userID))},
        setCurrentPage: (page) => {dispatch(setCurrentPageAC(page))},
        setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
        toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)


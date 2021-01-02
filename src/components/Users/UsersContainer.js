import React from "react"
import {connect} from "react-redux"
import UsersAPIComponent from "./UsersAPIComponent"
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../Redux/usersReducer"
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPagesSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../Redux/usersSelectors";



let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageLimit: getPagesSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})(UsersAPIComponent)


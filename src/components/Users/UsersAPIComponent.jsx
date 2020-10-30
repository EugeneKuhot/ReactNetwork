import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {UsersAPI as usersAPI} from "../api/api";
import {toggleFollowingProgress} from "../../Redux/usersReducer";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageLimit)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageLimit)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageLimit={this.props.pageLimit}
                users={this.props.users}
                unfollow={this.props.unfollow}
                /*unfollowRequest={usersAPI.unfollow}*/
                follow={this.props.follow}
                /*followRequest={usersAPI.follow}*/
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

export default UsersAPIComponent
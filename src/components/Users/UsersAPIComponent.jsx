import React from "react"
import Users from "./Users"
import Preloader from "../common/Preloader/Preloader"
import {Redirect} from "react-router-dom";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageLimit)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageLimit)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader/> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageLimit={this.props.pageLimit}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

export default UsersAPIComponent
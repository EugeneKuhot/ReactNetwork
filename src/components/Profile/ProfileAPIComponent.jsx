import React from "react"
import Profile from "./Profile"


class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 2
        }

        this.props.setProfile(userId)
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

export default ProfileAPIComponent
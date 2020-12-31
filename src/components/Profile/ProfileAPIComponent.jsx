import React from "react"
import Profile from "./Profile"

class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.autorizedUserId
        }

        this.props.setProfile(userId)
        this.props.getStatus(userId)
    }
    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}/>
    }
}

export default ProfileAPIComponent
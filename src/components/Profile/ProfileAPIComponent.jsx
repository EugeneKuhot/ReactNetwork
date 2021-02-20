import React from "react"
import Profile from "./Profile"

class ProfileAPIComponent extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.autorizedUserId

            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.setProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            isOwner={!this.props.match.params.userId}
            addPhoto={this.props.addPhoto}/>
    }
}

export default ProfileAPIComponent
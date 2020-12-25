import React from "react"
import {connect} from "react-redux"
import ProfileAPIComponent from "./ProfileAPIComponent"
import {setProfile} from "../../Redux/profileReducer"
import {withRouter} from "react-router-dom"
import {WithAuthRedirect} from "../hoc/withAuthRedirect";

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withURLDataContainerComponent = withRouter(ProfileAPIComponent)

export default connect(mapStateToProps, {setProfile})(withURLDataContainerComponent)
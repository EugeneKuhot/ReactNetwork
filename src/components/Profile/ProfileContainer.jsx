import React from "react"
import {connect} from "react-redux";
import ProfileAPIComponent from "./ProfileAPIComponent";
import {setUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withURLDataContainerComponent = withRouter(ProfileAPIComponent)

export default connect(mapStateToProps, {setUserProfile})(withURLDataContainerComponent)
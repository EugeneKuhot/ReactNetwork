import React from "react"
import {connect} from "react-redux";
import ProfileAPIComponent from "./ProfileAPIComponent";
import {setUserProfile} from "../../Redux/profileReducer";

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileAPIComponent)
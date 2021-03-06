import React from "react"
import {connect} from "react-redux"
import ProfileAPIComponent from "./ProfileAPIComponent"
import {addPhoto, getStatus, saveProfileData, setProfile, updateStatus} from "../../Redux/profileReducer"
import {withRouter} from "react-router-dom"


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.authData.id,
    isAuth: state.authData.isAuth
})

let withURLDataContainerComponent = withRouter(ProfileAPIComponent)

export default connect(mapStateToProps, {setProfile, getStatus, updateStatus, addPhoto, saveProfileData})(withURLDataContainerComponent)
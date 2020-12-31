import HeaderAPIComponent from "./HeaderAPIComponent"
import {connect} from "react-redux"
import {logoutThunkCreator} from "../../Redux/authReducer"


let mapStateToProps = (state) => {
    return {
        authData: state.authData
    }
}

export default connect(mapStateToProps, {logoutThunkCreator})(HeaderAPIComponent)
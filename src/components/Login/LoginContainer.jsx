import {connect} from 'react-redux'
import LoginPage from './Login'
import {loginThunkCreator, logoutThunkCreator} from '../../Redux/authReducer'

const mapStateToProps = (state) => ({
    isAuth: state.authData.isAuth,
    captcha: state.authData.captchaUrl
})

export default connect(mapStateToProps, {loginThunkCreator, logoutThunkCreator})(LoginPage)
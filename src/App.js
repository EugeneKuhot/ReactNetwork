import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/Login/LoginContainer'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './Redux/appReducer'
import Preloader from './components/common/Preloader/Preloader'
import store from "./Redux/redux-store"
import {WithSuspense} from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className='appBody'>
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <Navbar/>
                        <div className='appWrapperContent'>
                            <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                            <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                            <Route path='/users' render={() =>
                                <UsersContainer/>
                            }/>
                            <Route path='/login' render={() =>
                                <LoginPage/>
                            }/>
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                        </div>

                        <Footer/>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

let MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp
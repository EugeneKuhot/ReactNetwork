import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {HashRouter, Redirect, Route, withRouter} from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/Login/LoginContainer'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './Redux/appReducer'
import Preloader from './components/common/Preloader/Preloader'
import store from "./Redux/redux-store"
import {WithSuspense} from "./components/hoc/withSuspense"

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

const Music = React.lazy(() => import('./components/Music/Music'))
const News = React.lazy(() => import('./components/News/News'))
const Settings = React.lazy(() => import('./components/Settings/Settings'))


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
                            <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                            <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                            <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() =><LoginPage/>}/>
                            <Route path='/news' render={WithSuspense(News)}/>
                            <Route path='/music' render={WithSuspense(Music)}/>
                            <Route path='/settings' render={WithSuspense(Settings)}/>
                            <Route path='*' render={() => {return <div>404 Not found</div>}}/>
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
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

window.state = store.getState();

export default MainApp
import React from 'react'
import './App.css'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";


const App = (props) => {
    return (
        <div className='appBody'>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='appWrapperContent'>
                    <Route path='/profile' render={() =>
                        <Profile postsData={props.state.profilePage.postsData}
                                 newPostText={props.state.profilePage.newPostText}
                                 dispatch={props.dispatch}/>
                    }/>
                    <Route path='/dialogs' render={() =>
                        <Dialogs dialogsData={props.state.messagesPage.dialogsData}
                                 messagesData={props.state.messagesPage.messagesData}
                                 newMessageText={props.state.messagesPage.newMessageText}
                                 dispatch={props.dispatch}/>
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


export default App;

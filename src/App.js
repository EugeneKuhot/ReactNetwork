import React from 'react'
import './App.css'
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='appBody'>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='appWrapperContent'>
                        <Route path='/profile' render={() =>
                            <Profile postsData={props.state.profilePage.postsData}
                                     addPost={props.addPost}/>
                        }/>
                        <Route path='/dialogs' render={() =>
                            <Dialogs dialogsData={props.state.messagesPage.dialogsData}
                                     messagesData={props.state.messagesPage.messagesData}/>
                        }/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;

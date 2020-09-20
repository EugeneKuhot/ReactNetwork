import React from 'react'
import './App.css'
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import Route from "react-router-dom/es/Route";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className='appBody'>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='appWrapperContent'>
                    <Route path='/profile' render={() =>
                        <Profile />
                    }/>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer />
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

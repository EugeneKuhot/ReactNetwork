import React from 'react'
import './App.css'

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="" alt=""/>
            </header>

            <nav className='app-navigation'>
                <ul>
                    <li>
                        <a href="#">Profile</a>
                    </li>
                    <li>
                        <a href="#">Messages</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Music</a>
                    </li>
                    <li>
                        <a href="#">Settings</a>
                    </li>
                </ul>
            </nav>

            <section className='main-content'>
                <div>banner</div>
                <div>ava + desc</div>
                <ul>
                    <li>post1</li>
                    <li>post2</li>
                </ul>
            </section>

        </div>
    )
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id: 1, message: 'Hi. How are you', likes: 12},
    {id: 2, message: 'Fine thnx', likes: 122}
]

let dialogsData = [
    {id: 1, name: 'Vasya'},
    {id: 2, name: 'Ivan'},
    {id: 3, name: 'Petr'},
    {id: 4, name: 'Grisha'}
]

let messagesData = [
    {id: 1, textMessage: 'Hi'},
    {id: 2, textMessage: 'Where are you'}
]

ReactDOM.render(<App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

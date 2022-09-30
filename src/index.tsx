import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: "Valera"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Ira"},
    {id: 5, name: "Egor"},
]
let messages = [
    {id: 1, message:"Hi"},
    {id: 2, message:"How is your it-kamasutra?"},
    {id: 3, message:"Yo"},
]

let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 10},
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

reportWebVitals();

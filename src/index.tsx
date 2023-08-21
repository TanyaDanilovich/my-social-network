import './index.css';
//import reportWebVitals from './reportWebVitals';
import store from './state';
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = () => {

    root.render(
        //<React.StrictMode>
        <App state = {store.getState()} addPost = {store.addPost} updateNewPostText = {store.updateNewPostText}/>
        //</React.StrictMode>
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

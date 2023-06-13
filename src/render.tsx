import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import {addPost, StateType} from './state';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export const rerenderEntireTree = (state: StateType) => {

    root.render(
        //<React.StrictMode>
        <App state = {state} addPost = {addPost}/>
        //</React.StrictMode>
    );
}
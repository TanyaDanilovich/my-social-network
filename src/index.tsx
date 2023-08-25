import './index.css';
//import reportWebVitals from './reportWebVitals';
import store, {AppStateType} from './redux/store';
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function rerenderEntireTree(state: AppStateType) {

    root.render(
        //<React.StrictMode>
        <App store = {store} state = {state} dispatch = {store.dispatch.bind(store)}/>
        //</React.StrictMode>
    );
}


rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type PostsType = PostType[]

const postsObj: PostsType = [
    {id: 1, message: 'Привет', likesCount: 2},
    {id: 2, message: 'Привет привет', likesCount: 5},
    {id: 3, message: 'Привет привет привет', likesCount: 9},
];
export type DialogsItemType = {
    id: number
    name: string
}

export type DialogsItemsType = DialogsItemType[]

const dialogsItemsObj: DialogsItemsType = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 3, name: 'Гриша'}
];

export type MessageType = {
    id: number
    text: string
}

export type MessagesType = MessageType[]

const messagesObj: MessagesType = [
    {id: 1, text: 'Привет'},
    {id: 2, text: 'И тебе привет'},
    {id: 3, text: 'Пока'}
];
root.render(<App posts={postsObj} dialogs={dialogsItemsObj} messages={messagesObj}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

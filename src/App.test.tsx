import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {addPost, DialogsItemsType, MessagesType, PostsType, StateType} from './state';

test('renders learn react link', () => {
    let state: StateType = {
        profilePage: {
            postsObj: [
                {id: 1, message: 'Привет', likesCount: 2},
                {id: 2, message: 'Привет привет', likesCount: 5},
                {id: 3, message: 'Привет привет привет', likesCount: 9},
            ],
        },
        messagesPage: {
            messagesObj: [
                {id: 1, text: 'Привет'},
                {id: 2, text: 'И тебе привет'},
                {id: 3, text: 'Пока'}
            ],
            dialogsItemsObj: [
                {id: 1, name: 'Вася'},
                {id: 2, name: 'Петя'},
                {id: 3, name: 'Гриша'}
            ]
        }, sideBar: {}

    }
    render(<App state = {state} addPost = {addPost}/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

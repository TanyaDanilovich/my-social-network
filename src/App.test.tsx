import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {DialogsItemsType, MessagesType, PostsType} from './index';

test('renders learn react link', () => {
    const postsObj: PostsType = [
        {id: 1, message: 'Привет', likesCount: 2},
        {id: 2, message: 'Привет привет', likesCount: 5},
        {id: 3, message: 'Привет привет привет', likesCount: 9},
    ];
    const dialogsItemsObj: DialogsItemsType = [
        {id: 1, name: 'Вася'},
        {id: 2, name: 'Петя'},
        {id: 3, name: 'Гриша'}
    ];
    const messagesObj: MessagesType = [
        {id: 1, text: 'Привет'},
        {id: 2, text: 'И тебе привет'},
        {id: 3, text: 'Пока'}
    ];
    render(<App posts={postsObj} dialogs={dialogsItemsObj} messages={messagesObj}/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import {StoreType} from '../../../redux/state';
import {AddPostAC, UpdateNewPostTextAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


export type MyPostsPropsType = {
    store: StoreType
}


export default function MyPostsContainer({store}: MyPostsPropsType) {
    const state = store.getState()
    const postRef = React.createRef<HTMLTextAreaElement>()

    function newPostTextChange(text: string) {
        store.dispatch(UpdateNewPostTextAC(text))
    }


    const handleAddPost = () => {
        state.profilePage.newPostText !== '' && store.dispatch(AddPostAC())
        postRef.current?.focus()
    }


    return (
        <MyPosts posts = {state.profilePage.postsObj}
                 newPostText = {state.profilePage.newPostText}
                 handleAddPost = {handleAddPost}
                 newPostTextChange = {newPostTextChange}
        />
    )
}
import React from 'react';
import {AddPostAC, UpdateNewPostTextAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../redux/storeContex';


export type MyPostsPropsType = {
    //  store: StoreType
}


export default function MyPostsContainer() {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()

                const postRef = React.createRef<HTMLTextAreaElement>()

                function newPostTextChange(text: string) {
                    store.dispatch(UpdateNewPostTextAC(text))
                }

                const handleAddPost = () => {

                    if (state.profilePage.newPostText !== '') {
                        store.dispatch(AddPostAC())
                    }
                    postRef.current?.focus()
                }

                return <MyPosts posts = {state.profilePage.postsObj}
                                newPostText = {state.profilePage.newPostText}
                                handleAddPost = {handleAddPost}
                                newPostTextChange = {newPostTextChange}
                />
            }}

        </StoreContext.Consumer>
    )
}
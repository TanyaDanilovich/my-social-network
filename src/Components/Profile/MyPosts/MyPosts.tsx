import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {ActionsType, AddPostAC, PostsType, UpdateNewPostTextAC} from '../../../redux/state';


export type MyPostsPropsType = {
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionsType) => void
}


export default function MyPosts({posts, newPostText, dispatch}: MyPostsPropsType) {
    const postRef = React.createRef<HTMLTextAreaElement>()

    function newPostTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(UpdateNewPostTextAC(event.currentTarget.value))
    }

    const localPosts = posts.map((p, index) =>
        <Post key = {`${index}-p`} message = {p.message}
              likesCount = {p.likesCount}/>)

    const handleAddPost = () => {
        newPostText !== '' && dispatch(AddPostAC())
        postRef.current?.focus()
    }


    return (
        <div className = {classes.wrapper}>
            <div>
                <textarea ref = {postRef} value = {newPostText} onChange = {newPostTextChange}/>
                <button onClick = {handleAddPost}>Add post</button>
            </div>
            {localPosts}
        </div>
    )
}
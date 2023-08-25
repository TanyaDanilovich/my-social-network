import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../redux/state';


export type MyPostsPropsType = {
    posts: PostsType
    newPostText: string
    handleAddPost: () => void
    newPostTextChange: (text: string) => void
}


export default function MyPosts({posts, newPostText, handleAddPost, newPostTextChange}: MyPostsPropsType) {
    const postRef = React.createRef<HTMLTextAreaElement>()

    function onChangeNewPostText(event: ChangeEvent<HTMLTextAreaElement>) {
        newPostTextChange(event.currentTarget.value)
    }

    const localPosts = posts.map((p, index) =>
        <Post key = {`${index}-p`} message = {p.message}
              likesCount = {p.likesCount}/>)


    return (
        <div className = {classes.wrapper}>
            <div>
                <textarea ref = {postRef} value = {newPostText} onChange = {onChangeNewPostText}/>
                <button onClick = {handleAddPost}>Add post</button>
            </div>
            {localPosts}
        </div>
    )
}
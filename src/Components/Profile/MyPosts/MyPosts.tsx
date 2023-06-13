import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../state';


export type MyPostsPropsType = {
    posts: PostsType
    newPostText: string
    addPostCallback: (post: string) => void
    newPostTextChangeCallback: (newPostText: string) => void
}


export default function MyPosts({posts, addPostCallback, newPostText, newPostTextChangeCallback}: MyPostsPropsType) {
    const postRef = React.createRef<HTMLTextAreaElement>()
    const newPostTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        newPostTextChangeCallback(event.currentTarget.value)
    }
    const localPosts = posts.map((p, index) => <Post key = {`${index}-p`} message = {p.message}
                                                     likesCount = {p.likesCount}/>)
    const handleAddPost = () => {
        addPostCallback(newPostText)
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
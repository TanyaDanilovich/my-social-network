import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../state';


export type MyPostsPropsType = {
    posts: PostsType
    newPostText: string
    addPostCallback: () => void
    newPostTextChangeCallback: (newPostText: string) => void
}


export default function MyPosts({posts, addPostCallback, newPostText, newPostTextChangeCallback}: MyPostsPropsType) {
    const postRef = React.createRef<HTMLTextAreaElement>()


    function newPostTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
        console.log("newPostText=", newPostText)
        console.log(event.currentTarget.value)
        newPostTextChangeCallback(event.currentTarget.value)
    }

    const localPosts = posts.map((p, index) => <Post key = {`${index}-p`} message = {p.message}
                                                     likesCount = {p.likesCount}/>)

    const handleAddPost = () => {
        newPostText !== '' && addPostCallback()
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
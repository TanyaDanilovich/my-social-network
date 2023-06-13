import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../state';


export type MyPostsPropsType = {
    posts: PostsType
    addPostCallback: (post: string) => void
}

export default function MyPosts({posts, addPostCallback}: MyPostsPropsType) {
    const postRef = React.createRef<HTMLTextAreaElement>()
    const localPosts = posts.map((p, index) => <Post key = {`${index}-p`} message = {p.message}
                                                     likesCount = {p.likesCount}/>)
    const handleAddPost = () => {
        postRef.current && addPostCallback(postRef.current.value)
    }
    return (
        <div className = {classes.wrapper}>
            <div>
                <textarea ref = {postRef}></textarea>
                <button onClick = {handleAddPost}>Add post</button>
            </div>
            {localPosts}
        </div>
    )
}
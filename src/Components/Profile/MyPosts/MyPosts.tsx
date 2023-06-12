import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../state';


export type MyPostsPropsType = { posts: PostsType }

export default function MyPosts(props: MyPostsPropsType) {
    const postRef = React.createRef<HTMLTextAreaElement>()
    const posts = props.posts.map((p, index) => <Post key = {`${index}-p`} message = {p.message}
                                                      likesCount = {p.likesCount}/>)
    const handleAddPost = () => {
        postRef.current && console.log(postRef.current.value)
    }
    return (
        <div className = {classes.wrapper}>
            <div>
                <textarea ref = {postRef}></textarea>
                <button onClick = {handleAddPost}>Add post</button>
            </div>
            {posts}
        </div>
    )
}
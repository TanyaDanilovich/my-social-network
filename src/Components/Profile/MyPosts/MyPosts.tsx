import React, {useRef} from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../state';


export type MyPostsPropsType = { posts: PostsType }

export default function MyPosts(props: MyPostsPropsType) {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const handlerOnClick = () => {
        textareaRef.current && console.log(textareaRef.current.value)
    }
    const posts = props.posts.map((p, index) => <Post key = {`${index}-p`} message = {p.message}
                                                      likesCount = {p.likesCount}/>)
    return (
        <div className = {classes.wrapper}>
            <div>
                <textarea ref = {textareaRef}></textarea>
                <button onClick = {handlerOnClick}>Add post</button>
            </div>
            {posts}
        </div>
    )
}
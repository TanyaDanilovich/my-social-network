import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../state';


export type MyPostsPropsType = { posts: PostsType }

export default function MyPosts(props: MyPostsPropsType) {

    const posts = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={classes.wrapper}>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {posts}
        </div>
    )
}
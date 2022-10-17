import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";


export default function MyPosts() {
    return (
        <div className={classes.wrapper}>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message={"Привет"} likesCount={6}/>
            <Post message={"Привет и тебе"} likesCount={2}/>
        </div>
    )
}
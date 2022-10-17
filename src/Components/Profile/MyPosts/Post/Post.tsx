import React from 'react';
import classes from './Post.module.css'
import avatar_women from '../../../../assets/avatar_women.jpg'

export type PostType = {
    message: string
    // avatar: string
    likesCount: number
}

export default function Post(props: PostType) {
    return (
        <div className={classes.wrapper}>
            <img alt="avatar" className={classes.avatar} src={avatar_women}/>
            <div>{props.message}</div>
            <span>{`${props.likesCount} лайка`}</span>
        </div>)
}
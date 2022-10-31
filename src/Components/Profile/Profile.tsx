import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo';
import mainBanner from '../../assets/MainBanner.png';
import {ProfilePageType} from '../../state';


export type ProfilePropsType = {
    id: number
    data: ProfilePageType
}
export default function Profile(props: ProfilePropsType) {
    return (
        <div className={classes.wrapper}>
            <ProfileInfo title={'Bringing you closer to the people.'} url={mainBanner}/>
            <MyPosts posts={props.data.postsObj}/>
        </div>
    )
}
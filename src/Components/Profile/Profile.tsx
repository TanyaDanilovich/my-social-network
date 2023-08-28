import React from 'react';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo';
import mainBanner from '../../assets/MainBanner.png';
import MyPostsContainer from './MyPosts/MyPostsContainer';


export type ProfilePropsType = {
    id: number
    // store: StoreType
}
export default function Profile({id}: ProfilePropsType) {
    return (
        <div className = {classes.wrapper}>
            <ProfileInfo title = {'Bringing you closer to the people.'} url = {mainBanner}/>
            <MyPostsContainer/>
        </div>
    )
}
import React from 'react';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo';
import mainBanner from '../../assets/MainBanner.png';
import {StoreType} from '../../redux/state';
import MyPostsContainer from './MyPosts/MyPostsContainer';


export type ProfilePropsType = {
    id: number
    store: StoreType
}
export default function Profile({id, store}: ProfilePropsType) {
    return (
        <div className = {classes.wrapper}>
            <ProfileInfo title = {'Bringing you closer to the people.'} url = {mainBanner}/>
            <MyPostsContainer store = {store}/>
        </div>
    )
}
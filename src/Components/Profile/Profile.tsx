import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo';
import mainBanner from '../../assets/MainBanner.png';
import {ProfilePageType} from '../../state';


export type ProfilePropsType = {
    id: number
    data: ProfilePageType
    addPostCallback: (post: string) => void
}
export default function Profile({id, data, addPostCallback}: ProfilePropsType) {
    return (
        <div className = {classes.wrapper}>
            <ProfileInfo title = {'Bringing you closer to the people.'} url = {mainBanner}/>
            <MyPosts posts = {data.postsObj} addPostCallback = {addPostCallback}/>
        </div>
    )
}
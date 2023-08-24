import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo';
import mainBanner from '../../assets/MainBanner.png';
import {ActionsType, ProfilePageType} from '../../redux/state';


export type ProfilePropsType = {
    id: number
    data: ProfilePageType
    dispatch: (action: ActionsType) => void
}
export default function Profile({id, data, dispatch}: ProfilePropsType) {
    return (
        <div className = {classes.wrapper}>
            <ProfileInfo title = {'Bringing you closer to the people.'} url = {mainBanner}/>
            <MyPosts posts = {data.postsObj}
                     newPostText = {data.newPostText}
                     dispatch = {dispatch}/>
        </div>
    )
}
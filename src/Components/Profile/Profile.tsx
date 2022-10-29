import React from 'react';
import classes from './Profile.module.css'
import mainBanner from '../../assets/MainBanner.png'
import MyPosts from './MyPosts/MyPosts';

export type ProfilePropsType = { id: number }
export default function Profile(props: ProfilePropsType) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.profileHeader}>
                <h4 className={classes.pageTitle}>Bringing you closer to the people.</h4>
                <img alt="main banner" className={classes.mainBanner} src={mainBanner}/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}
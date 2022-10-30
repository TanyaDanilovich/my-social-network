import React from 'react';
import classes from './Profile.module.css';


export type ProfileInfoPropsType = {
    title: string
    url: any
};

function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <>
            <div className={classes.profileHeader}>
                <h4 className={classes.pageTitle}>{props.title}</h4>
                <img alt="main banner" className={classes.mainBanner} src={props.url}/>
            </div>
            <div>
                ava+description
            </div>
        </>);
}

export default ProfileInfo;
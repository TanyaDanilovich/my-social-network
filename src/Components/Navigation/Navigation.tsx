import React from 'react';
import classes from './Navigation.module.css'
import {NavLink} from 'react-router-dom';


type IsACtiveClassType = {
    isActive: boolean
}


export default function Navigation() {
    const isActiveClass = ({isActive}: IsACtiveClassType) => (isActive ? `${classes.link} ${classes.active}` : `${classes.link}`)
    return (
        <nav className={classes.wrapper}>
            <div>
                <NavLink to="/profile" className={isActiveClass}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={isActiveClass}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={isActiveClass}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={isActiveClass}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/setting" className={isActiveClass}>Setting</NavLink>
            </div>
        </nav>)
}
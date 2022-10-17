import React from 'react';
import classes from "./Navigation.module.css"

export default function Navigation() {
    return (
        <nav className={classes.wrapper}>
            <a>Profile</a>
            <a>News</a>
            <a>Musik</a>
            <a>Settings</a>
        </nav>)
}
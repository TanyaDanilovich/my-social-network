import React from 'react';
import classes from './Header.module.css'
import logo from '../../assets/social-logo.svg'

export default function Header() {
    return (
        <header className={classes.wrapper}>
            <img alt="logo" className={classes.logo} src={logo}/>
            <div className={classes.title}>Social Apps</div>
        </header>)
}
import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';


export type DialogItemPropsType = {
    id: number
    name: string

}
const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={classes.dialogContent}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>)
}

export default DialogItem;
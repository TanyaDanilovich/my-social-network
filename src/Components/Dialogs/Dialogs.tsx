import React from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsItemsType, MessagesType} from '../../index';

export type  DialogsPropsTypes = {
    id: number
    dialogs: DialogsItemsType
    messages: MessagesType
};

function Dialogs(props: DialogsPropsTypes) {


    const dialogsItems = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    const messagesItem = props.messages.map(message => <Message id={message.id} text={message.text}/>)

    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogsContainer}>
                {dialogsItems}
            </div>
            <div className={classes.messagesContainer}>
                {messagesItem}
            </div>

        </div>
    );
}

export default Dialogs;
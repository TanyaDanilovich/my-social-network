import React from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {MessagesPageType} from '../../state';


export type  DialogsPropsTypes = {
    id: number
    data: MessagesPageType
};

function Dialogs(props: DialogsPropsTypes) {


    const dialogsItems = props.data.dialogsItemsObj.map(dialog => <DialogItem id={dialog.id}
                                                                              name={dialog.name}/>)

    const messagesItem = props.data.messagesObj.map(message => <Message id={message.id}
                                                                        text={message.text}/>)

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
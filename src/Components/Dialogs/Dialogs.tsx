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

    const newDialogRef = React.createRef<HTMLInputElement>()
    const newMessageRef = React.createRef<HTMLTextAreaElement>()

    const dialogsItems = props.data.dialogsItemsObj.map((dialog, index) => <DialogItem key = {`${index}-d`}
                                                                                       id = {dialog.id}
                                                                                       name = {dialog.name}/>)

    const messagesItem = props.data.messagesObj.map((message, index) => <Message key = {`${index}-m`} id = {message.id}
                                                                                 text = {message.text}/>)
    const handleAddDialog = () => {
        newDialogRef.current && console.log(newDialogRef.current.value)
    }
    const handleAddMessage = () => {
        newMessageRef.current && console.log(newMessageRef.current.value)
    }

    return (
        <div className = {classes.wrapper}>
            <div className = {classes.dialogsContainer}>
                {dialogsItems}
                <input ref = {newDialogRef}/>
                <button onClick = {handleAddDialog}>Add dialog</button>
            </div>
            <div className = {classes.messagesContainer}>
                {messagesItem}
                <textarea ref = {newMessageRef}/>
                <button onClick = {handleAddMessage}>Add message</button>
            </div>

        </div>
    );
}

export default Dialogs;
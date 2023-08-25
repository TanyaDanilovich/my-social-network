import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogsType, MessagesType} from '../../redux/state';


export type  DialogsPropsTypes = {
    id: number
    dialogs: DialogsType
    messages: MessagesType
    newMessagesText: string
    handleAddDialog: () => void
    handleAddMessage: () => void
    handleChangeNewMessagesText: (text: string) => void
};

function Dialogs({
                     id,
                     dialogs,
                     messages,
                     newMessagesText,
                     handleAddDialog,
                     handleAddMessage,
                     handleChangeNewMessagesText
                 }: DialogsPropsTypes) {

    const newDialogRef = React.createRef<HTMLInputElement>()
    const newMessageRef = React.createRef<HTMLTextAreaElement>()

    const dialogsItems =
        dialogs.map((dialog, index) =>
            <DialogItem key = {`${index}-d`} id = {dialog.id}
                        name = {dialog.name}/>)

    const messagesItem =
        messages.map((message, index) =>
            <Message key = {`${index}-m`} id = {message.id} text = {message.text}/>)

    const onChangeNewMessagesText =
        (event: ChangeEvent<HTMLTextAreaElement>) =>
            handleChangeNewMessagesText(event.currentTarget.value)


    return (
        <div className = {classes.wrapper}>
            <div className = {classes.dialogsContainer}>
                {dialogsItems}
                <input ref = {newDialogRef}/>
                <button onClick = {handleAddDialog}>Add dialog</button>
            </div>
            <div className = {classes.messagesContainer}>
                {messagesItem}
                <textarea ref = {newMessageRef}
                          onChange = {onChangeNewMessagesText}
                          value = {newMessagesText}
                />
                <button onClick = {handleAddMessage}>Add message</button>
            </div>

        </div>
    );
}

export default Dialogs;
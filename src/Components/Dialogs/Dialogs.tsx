import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {ActionsType, AddMessagesAC, DialogsPageType, UpdateNewMessagesTextAC} from '../../state';


export type  DialogsPropsTypes = {
    id: number
    data: DialogsPageType
    dispatch: (action: ActionsType) => void
};

function Dialogs(props: DialogsPropsTypes) {

    const newDialogRef = React.createRef<HTMLInputElement>()
    const newMessageRef = React.createRef<HTMLTextAreaElement>()

    const dialogsItems = props.data.dialogs
        .map((dialog, index) =>
            <DialogItem key = {`${index}-d`} id = {dialog.id}
                        name = {dialog.name}/>)

    const messagesItem = props.data.messages
        .map((message, index) =>
            <Message key = {`${index}-m`} id = {message.id} text = {message.text}/>)

    const handleAddDialog = () => {
        newDialogRef.current && console.log(newDialogRef.current.value)
    }
    const handleChangeNewMessagesText =
        (event: ChangeEvent<HTMLTextAreaElement>) =>
            props.dispatch(UpdateNewMessagesTextAC(event.currentTarget.value))

    const handleAddMessage = () => props.dispatch(AddMessagesAC())
    

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
                          onChange = {handleChangeNewMessagesText}
                          value = {props.data.newMessagesText}
                />
                <button onClick = {handleAddMessage}>Add message</button>
            </div>

        </div>
    );
}

export default Dialogs;
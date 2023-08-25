import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {StoreType} from '../../redux/state';
import {AddMessagesAC, UpdateNewMessagesTextAC} from '../../redux/dialogsReducer';


export type  DialogsPropsTypes = {
    id: number
    store: StoreType
};

function Dialogs(props: DialogsPropsTypes) {
    const state = props.store.getState()

    const newDialogRef = React.createRef<HTMLInputElement>()
    const newMessageRef = React.createRef<HTMLTextAreaElement>()

    const dialogsItems = state.dialogsPage.dialogs
        .map((dialog, index) =>
            <DialogItem key = {`${index}-d`} id = {dialog.id}
                        name = {dialog.name}/>)

    const messagesItem = state.dialogsPage.messages
        .map((message, index) =>
            <Message key = {`${index}-m`} id = {message.id} text = {message.text}/>)

    const handleAddDialog = () => {
        newDialogRef.current && console.log(newDialogRef.current.value)
    }
    const handleChangeNewMessagesText =
        (event: ChangeEvent<HTMLTextAreaElement>) =>
            props.store.dispatch(UpdateNewMessagesTextAC(event.currentTarget.value))

    const handleAddMessage = () => props.store.dispatch(AddMessagesAC())


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
                          value = {state.dialogsPage.newMessagesText}
                />
                <button onClick = {handleAddMessage}>Add message</button>
            </div>

        </div>
    );
}

export default Dialogs;
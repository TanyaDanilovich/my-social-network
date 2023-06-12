import React, {useRef} from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {MessagesPageType} from '../../state';


export type  DialogsPropsTypes = {
    id: number
    data: MessagesPageType
};

function Dialogs(props: DialogsPropsTypes) {

    const newPersonRef = useRef<HTMLInputElement>(null)
    const newMessageRef = useRef<HTMLTextAreaElement>(null)

    const dialogsItems = props.data.dialogsItemsObj
        .map((dialog, index) => <DialogItem key = {`${index}-d`}
                                            id = {dialog.id}
                                            name = {dialog.name}/>)

    const messagesItem = props.data.messagesObj
        .map((message, index) => <Message key = {`${index}-m`} id = {message.id}
                                          text = {message.text}/>)

    const handlerAddPerson = () => {
        newPersonRef.current && console.log(newPersonRef.current.value)
    }
    const handlerAddMessage = () => {
        newMessageRef.current && console.log(newMessageRef.current.value)
    }
    return (
        <div className = {classes.wrapper}>
            <div className = {classes.dialogsContainer}>
                {dialogsItems}
                <input ref = {newPersonRef}/>
                <button onClick = {handlerAddPerson}>Добавить person</button>
            </div>
            <div className = {classes.messagesContainer}>
                {messagesItem}
                <textarea ref = {newMessageRef}/>
                <button onClick = {handlerAddMessage}>Добавить сообщение</button>
            </div>

        </div>
    );
}

export default Dialogs;
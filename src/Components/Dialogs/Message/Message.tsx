import React from 'react';
import classes from './Message.module.css'


export type MessagePropsType = {
    id: number
    text: string
}
const Message = (props: MessagePropsType) => {
    return <div className={classes.messageContent}>{props.text}</div>
}

export default Message;
import React from 'react';
import {StoreType} from '../../redux/state';
import {AddMessagesAC, UpdateNewMessagesTextAC} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


export type  DialogsContainerPropsTypes = {
    id: number
    store: StoreType
};

function DialogsContainer({id, store}: DialogsContainerPropsTypes) {
    const state = store.getState()

    const newDialogRef = React.createRef<HTMLInputElement>()

    const handleAddDialog = () => {
        newDialogRef.current && console.log(newDialogRef.current.value)
    }
    const handleChangeNewMessagesText =
        (text: string) => store.dispatch(UpdateNewMessagesTextAC(text))

    const handleAddMessage = () => store.dispatch(AddMessagesAC())
    
    return (
        <Dialogs id = {id}
                 dialogs = {state.dialogsPage.dialogs}
                 messages = {state.dialogsPage.messages}
                 newMessagesText = {state.dialogsPage.newMessagesText}
                 handleAddDialog = {handleAddDialog}
                 handleAddMessage = {handleAddMessage}
                 handleChangeNewMessagesText = {handleChangeNewMessagesText}
        />
    );
}

export default DialogsContainer;
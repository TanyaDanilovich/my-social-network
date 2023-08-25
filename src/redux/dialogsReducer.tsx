import {ActionsType, DialogsPageType} from './state';

export const ADD_MESSAGES = "ADD-MESSAGES"
export const UPDATE_NEW_MESSAGES_TEXT = "UPDATE-NEW-MESSAGES-TEXT"

export type AddMessagesActionType = {
    type: typeof ADD_MESSAGES
}

export type UpdateNewMessagesTextActionType = {
    type: typeof UPDATE_NEW_MESSAGES_TEXT
    newText: string
}

export const AddMessagesAC = (): AddMessagesActionType => ({type: ADD_MESSAGES})
export const UpdateNewMessagesTextAC = (newText: string): UpdateNewMessagesTextActionType => ({
    type: UPDATE_NEW_MESSAGES_TEXT,
    newText: newText
})

const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {

    if (action.type === UPDATE_NEW_MESSAGES_TEXT) {
        state.newMessagesText = action.newText
    }
    if (action.type === ADD_MESSAGES) {
        const newId = state.messages.length + 1
        const newText = state.newMessagesText
        state = {
            ...state,

            messages:
                [...state.messages, {id: newId, text: newText}],
            newMessagesText: ''
        }
    }


    return state
}
export default dialogsReducer
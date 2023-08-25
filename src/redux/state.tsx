import profileReducer, {
    ADD_POST,
    AddPostActionType,
    UPDATE_NEW_POST_TEXT,
    UpdateNewPostTextActionType
} from './profileReducer';
import dialogsReducer, {
    ADD_MESSAGES,
    AddMessagesActionType,
    UPDATE_NEW_MESSAGES_TEXT,
    UpdateNewMessagesTextActionType
} from './dialogsReducer';

export  type PostType = {
    id: number
    message: string
    likesCount: number
}
export  type PostsType = PostType[]

export  type DialogType = {
    id: number
    name: string
}

export  type DialogsType = DialogType[]

export  type MessageType = {
    id: number
    text: string
}

export  type MessagesType = MessageType[]

export  type ProfilePageType = {
    postsObj: PostsType
    newPostText: string
}

export type DialogsPageType = {
    messages: MessagesType
    newMessagesText: string
    dialogs: DialogsType
}
export type SideBarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar?: SideBarType
}

type ObserverType = (state: StateType) => void


export type ActionsType =
    AddPostActionType |
    UpdateNewPostTextActionType |
    AddMessagesActionType |
    UpdateNewMessagesTextActionType


export type StoreType = {
    _state: StateType
    _onChange: (state: StateType) => void
    getState: () => StateType
    //addPost: () => void
    //updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void
    subscribe: (observer: ObserverType) => void
}


let store: StoreType = {

    _state: {
        profilePage: {
            postsObj: [
                {id: 1, message: 'Привет', likesCount: 2},
                {id: 2, message: 'Привет привет', likesCount: 5},
                {id: 3, message: 'Привет привет привет', likesCount: 9},
            ],
            newPostText: ''

        },
        dialogsPage: {
            messages: [
                {id: 1, text: 'Привет'},
                {id: 2, text: 'И тебе привет'},
                {id: 3, text: 'Пока'}
            ],
            dialogs: [
                {id: 1, name: 'Вася'},
                {id: 2, name: 'Петя'},
                {id: 3, name: 'Гриша'}
            ],
            newMessagesText: '',
        },
        sideBar: {}
    },

    _onChange() {
        console.log('rerenderEntireTree')
    },


    getState() {
        //console.dir(this)
        return this._state
    },
    subscribe(observer: ObserverType) {
        this._onChange = observer
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._onChange(this._state)
    }
}


export default store;

declare global {
    interface Window {
        store: StoreType;
    }
}

window.store = store
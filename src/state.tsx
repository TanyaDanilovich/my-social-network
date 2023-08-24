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


//ProfilePage
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type AddPostActionType = {
    type: typeof ADD_POST
}

export type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export const AddPostAC = (): AddPostActionType => ({type: ADD_POST})
export const UpdateNewPostTextAC = (newText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})


//DialogsPage
const ADD_MESSAGES = "ADD-MESSAGES"
const UPDATE_NEW_MESSAGES_TEXT = "UPDATE-NEW-MESSAGES-TEXT"

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
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._onChange(this._state)
        }
        if (action.type === ADD_POST) {
            const newId = this._state.profilePage.postsObj.length + 1
            const newText = this._state.profilePage.newPostText
            this._state = {
                ...this._state,
                profilePage:
                    {
                        ...this._state.profilePage,
                        postsObj:
                            [...this._state.profilePage.postsObj, {id: newId, message: newText, likesCount: 0}],
                        newPostText: ''
                    }
            }
            this._onChange(this._state)
        }

        if (action.type === UPDATE_NEW_MESSAGES_TEXT) {
            this._state.dialogsPage.newMessagesText = action.newText
            this._onChange(this._state)
        }
        if (action.type === ADD_MESSAGES) {
            const newId = this._state.dialogsPage.messages.length + 1
            const newText = this._state.dialogsPage.newMessagesText
            this._state = {
                ...this._state,
                dialogsPage:
                    {
                        ...this._state.dialogsPage,
                        messages:
                            [...this._state.dialogsPage.messages, {id: newId, text: newText}],
                        newMessagesText: ''
                    }
            }
            this._onChange(this._state)
        }
        // switch (action.type) {
        //
        //     case "ADD-POST":
        //         const newId = this._state.profilePage.postsObj.length + 1
        //         const newText = this._state.profilePage.newPostText
        //         this._state = {
        //             ...this._state,
        //             profilePage:
        //                 {
        //                     ...this._state.profilePage,
        //                     postsObj:
        //                         [...this._state.profilePage.postsObj, {id: newId, message: newText, likesCount: 0}],
        //                     newPostText: ''
        //                 }
        //         }
        //         this._onChange(this._state);
        //
        //     case UPDATE_NEW_MESSAGES_TEXT:
        //         this._state.profilePage.newPostText = action.newText
        //         this._onChange(this._state)
        //
        //     case 'ADD-MESSAGES':
        //
        //
        //     case 'UPDATE-NEW-MESSAGES-TEXT':
        //
        //
        //     default:
        //         return null
        // }


    }
}


export default store;

declare global {
    interface Window {
        store: StoreType;
    }
}

window.store = store
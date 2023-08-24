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
    dialogs: DialogsType
}
export type SideBarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar?: SideBarType
}

type ObserverType = (state: StateType) => void

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

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType


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
            ]
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
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._onChange(this._state)
        }
    }
}


export default store;

declare global {
    interface Window {
        store: StoreType;
    }
}

window.store = store
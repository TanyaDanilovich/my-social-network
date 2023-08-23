export  type PostType = {
    id: number
    message: string
    likesCount: number
}
export  type PostsType = PostType[]

export  type DialogsItemType = {
    id: number
    name: string
}

export  type DialogsItemsType = DialogsItemType[]

export  type MessageType = {
    id: number
    text: string
}

export  type MessagesType = MessageType[]

export  type ProfilePageType = {
    postsObj: PostsType
    newPostText: string
}

export type MessagesPageType = {
    messagesObj: MessagesType
    dialogsItemsObj: DialogsItemsType
}
export type SideBarType = {}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sideBar?: SideBarType
}

type ObserverType = (state: StateType) => void

export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}


export type ActionType = AddPostActionType | UpdateNewPostTextActionType


export type StoreType = {
    _state: StateType
    _onChange: (state: StateType) => void
    getState: () => StateType
    //addPost: () => void
    //updateNewPostText: (newText: string) => void
    dispatch: (action: ActionType) => void
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
        messagesPage: {
            messagesObj: [
                {id: 1, text: 'Привет'},
                {id: 2, text: 'И тебе привет'},
                {id: 3, text: 'Пока'}
            ],
            dialogsItemsObj: [
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
        if (action.type === 'ADD-POST') {
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
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
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
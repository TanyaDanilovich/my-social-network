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

type ObserverType = () => void

export type StoreType = {
    _state: StateType
    getState: () => StateType
    onChange: () => void
    addPost: (post: string) => void
    updateNewPostText: (newText: string) => void
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

    getState() {
        return this._state
    },

    onChange() {
        console.log('rerenderEntireTree')
    },

    addPost(post: string) {
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
        this.onChange()
    },

    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this.onChange();
    },

    subscribe(observer: ObserverType) {
        this.onChange = observer
    }
}


export default store;

declare global {
    interface Window {
        store: StoreType;
    }
}

window.store = store
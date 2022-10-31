export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type PostsType = PostType[]

export type DialogsItemType = {
    id: number
    name: string
}

export type DialogsItemsType = DialogsItemType[]

export type MessageType = {
    id: number
    text: string
}

export type MessagesType = MessageType[]

export type ProfilePageType = {
    postsObj: PostsType
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

let state: StateType = {
    profilePage: {
        postsObj: [
            {id: 1, message: 'Привет', likesCount: 2},
            {id: 2, message: 'Привет привет', likesCount: 5},
            {id: 3, message: 'Привет привет привет', likesCount: 9},
        ],
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
    }, sideBar: {}

}

export default state;
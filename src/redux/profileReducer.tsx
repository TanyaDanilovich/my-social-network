import {ActionsType, ProfilePageType} from './state';

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

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


const initialState = {
    postsObj: [
        {id: 1, message: 'Привет', likesCount: 2},
        {id: 2, message: 'Привет привет', likesCount: 5},
        {id: 3, message: 'Привет привет привет', likesCount: 9},
    ],
    newPostText: ''

}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {

    if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }
    if (action.type === ADD_POST) {
        const newId = state.postsObj.length + 1
        const newText = state.newPostText
        state = {
            ...state,
            postsObj:
                [...state.postsObj, {id: newId, message: newText, likesCount: 0}],
            newPostText: ''
        }
    }


    return state
}

export default profileReducer
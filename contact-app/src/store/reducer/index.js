import {ADD_FAV, EDIT_CONTACT} from '../actions'

const initialState = {
    favorite: [],
    contact:[]
}

export default function reducer (state = initialState, action) {
    switch(action.type){
        case ADD_FAV:
            return {...state, favorite: state.favorite.concat(action.payload)}
        case EDIT_CONTACT:
            return {...state, contact: action.payload}
        }
    return state
}

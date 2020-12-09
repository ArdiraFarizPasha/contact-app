import {ADD_FAV} from './index'

export function addFavorite(data) {
    return {
        type: ADD_FAV,
        payload: data
    }
}
import {EDIT_CONTACT} from './index'

export function editContact(data) {
    return {
        type: EDIT_CONTACT,
        payload: data
    }
}
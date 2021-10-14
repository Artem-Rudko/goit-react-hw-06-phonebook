import { SAVE_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './action-types';

export function saveContact({ id, name, number }) {
    return {
        type: SAVE_CONTACT,
        payload: { id, name, number },
    };
}

export function delContact(id) {
    return {
        type: DELETE_CONTACT,
        payload: id,
    };
}

export function filterContact(text) {
    return {
        type: FILTER_CONTACT,
        payload: text,
    };
}

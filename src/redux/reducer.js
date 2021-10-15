import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { saveContact, delContact, filterContact } from './actions';

// import actions from './actions';

// import { SAVE_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './action-types';

// const INITIAL_STATE = {
//     contacts: {
//         items: [],
//         filter: '',
//     },
// };

const items = createReducer([], {
    [saveContact]: (state, action) => [...state, action.payload],
    [delContact]: (state, action) =>
        state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
    [filterContact]: (_, action) => action.payload,
});

// export const reducer = (state = INITIAL_STATE, action) => {
//     const contactsStore = [...state.contacts.items];

//     switch (action.type) {
//         case SAVE_CONTACT:
//             return {
//                 ...state,
//                 contacts: {
//                     ...state.contacts,
//                     items: [...state.contacts.items, action.payload],
//                 },
//             };
//         case DELETE_CONTACT:
//             return {
//                 ...state,
//                 contacts: {
//                     ...state.contacts,
//                     items: [
//                         ...contactsStore.filter(
//                             contact => contact.id !== action.payload,
//                         ),
//                     ],
//                 },
//             };
//         case FILTER_CONTACT:
//             return {
//                 ...state,
//                 contacts: {
//                     ...state.contacts,
//                     filter: action.payload,
//                 },
//             };
//         default:
//             return state;
//     }
// };

export default combineReducers({
    items,
    filter,
});

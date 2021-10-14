import { createStore } from 'redux';
import { reducer } from './reducer';

// const reducer = (
//     state = {
//         contacts: {
//             items: [],
//             filter: '',
//         },
//     },
//     action,
// ) => state;

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

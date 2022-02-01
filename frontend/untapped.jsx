import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    // let preloadedState = undefined;
    // if (window.currentUser) {
    //     preloadedState = {
    //         session: {
    //             currentUser: window.currentUser
    //         }
    //     }
    // }
    let store; 
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
            
            
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
   
    window.store = store
    const root = document.getElementById('root');
    // const store = configureStore()
    window.getState = store.getState
    ReactDOM.render(<Root store ={store}/>, root);
});

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchAllUsers } from './actions/user_actions'
import { loadState } from './store/localStorage';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      currentTask: loadState()
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TESTING PURPOSES
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllUsers = fetchAllUsers;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} /> , root);
});


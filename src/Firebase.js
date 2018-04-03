import { createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import { rootReducer } from './react/reducers';
import firebase from 'firebase';


const config = {
  apiKey: 'AIzaSyBhWWuyDpJ17NPhaTOAEkB37cYnqQBk110',
  authDomain: 'testproject-b9f8d.firebaseapp.com',
  databaseURL: 'https://testproject-b9f8d.firebaseio.com',
  projectId: 'testproject-b9f8d',
  storageBucket: '',
  messagingSenderId: '1055563143247',
  userProfile: 'users',
  attachAuthIsReady: true, // attaches auth is ready promise to store

};

firebase.initializeApp(config);

const createStoreWithFirebase = compose(reactReduxFirebase(firebase, config))(
  createStore,
);

export const store = createStoreWithFirebase(rootReducer, {});

import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBhWWuyDpJ17NPhaTOAEkB37cYnqQBk110",
    authDomain: "testproject-b9f8d.firebaseapp.com",
    databaseURL: "https://testproject-b9f8d.firebaseio.com",
    projectId: "testproject-b9f8d",
    storageBucket: "",
    messagingSenderId: "1055563143247"
}

firebase.initializeApp(config)

export const database = firebase.database().ref().child('object').child('name')
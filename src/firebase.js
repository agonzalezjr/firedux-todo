import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDVzb1g3jyBztIojOEpM_MN-Nk77utLh9k",
  authDomain: "firedux-todo-777a2.firebaseapp.com",
  databaseURL: "https://firedux-todo-777a2.firebaseio.com",
  projectId: "firedux-todo-777a2",
  storageBucket: "firedux-todo-777a2.appspot.com",
  messagingSenderId: "172026999781"
}

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();

export const todosRef = databaseRef.child("todos")

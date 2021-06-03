import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlFryxdCnyXDG1fTpJ0uKZpjI6-M-ieDQ",
    authDomain: "linkedin-clone-dfe1c.firebaseapp.com",
    projectId: "linkedin-clone-dfe1c",
    storageBucket: "linkedin-clone-dfe1c.appspot.com",
    messagingSenderId: "696611770911",
    appId: "1:696611770911:web:d40e92713a6858699f7b2a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
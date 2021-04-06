
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCENSwIW6dtaObWBYubHKaCqYtbHZc9me4",
    authDomain: "login-e2385.firebaseapp.com",
    projectId: "login-e2385",
    storageBucket: "login-e2385.appspot.com",
    messagingSenderId: "676241681614",
    appId: "1:676241681614:web:f6b581b9adb0ffebd1749f"
};

const fire = firebase.initializeApp(firebaseConfig);

const db = fire.firestore();
const auth = firebase.auth();
export { db, auth };
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBLASVp5xv_XRfUcYdvYz15n4m3zkancSU",
    authDomain: "nextfire-proj.firebaseapp.com",
    projectId: "nextfire-proj",
    storageBucket: "nextfire-proj.appspot.com",
    messagingSenderId: "171621662285",
    appId: "1:171621662285:web:ccf9a49487a631fa8da604"
};

if (!firebase.getApps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

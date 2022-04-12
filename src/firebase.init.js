// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIBZi4_Z1c3eZL_wlWm0mGkaZ07cUQur0",
    authDomain: "ema-john-simple-332b4.firebaseapp.com",
    projectId: "ema-john-simple-332b4",
    storageBucket: "ema-john-simple-332b4.appspot.com",
    messagingSenderId: "120326651634",
    appId: "1:120326651634:web:36bd411d79fcd766a81a6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
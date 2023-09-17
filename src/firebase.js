// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3HrLU1AdB2t9TjPVIklXZe6bpLAN0onI",
  authDomain: "realtor-clone-react-5e822.firebaseapp.com",
  projectId: "realtor-clone-react-5e822",
  storageBucket: "realtor-clone-react-5e822.appspot.com",
  messagingSenderId: "1078989933334",
  appId: "1:1078989933334:web:c64071e01ae29265711e37"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
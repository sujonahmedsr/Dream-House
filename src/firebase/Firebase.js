// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5mVTxPJLFpfXt5G7DUD1B-pQETfZ3LFc",
  authDomain: "b9a9-dream-house.firebaseapp.com",
  projectId: "b9a9-dream-house",
  storageBucket: "b9a9-dream-house.appspot.com",
  messagingSenderId: "291337675678",
  appId: "1:291337675678:web:466d7b60a47e0e80c72c8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
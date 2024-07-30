// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVhCAwSZQE-VoIcrH3LZOaIUH5A3hOgPk",
  authDomain: "voting-game-96b29.firebaseapp.com",
  projectId: "voting-game-96b29",
  storageBucket: "voting-game-96b29.appspot.com",
  messagingSenderId: "251632487181",
  appId: "1:251632487181:web:8f9cd4a1669127e112fe44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
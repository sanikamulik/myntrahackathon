import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVhCAwSZQE-VoIcrH3LZOaIUH5A3hOgPk",
  authDomain: "voting-game-96b29.firebaseapp.com",
  projectId: "voting-game-96b29",
  storageBucket: "voting-game-96b29.appspot.com",
  messagingSenderId: "251632487181",
  appId: "1:251632487181:web:8f9cd4a1669127e112fe44"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
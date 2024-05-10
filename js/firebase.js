import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMIj-7_8JzLjUCDHOBa-H_R9AQvc8tqS4",
  authDomain: "js-todolist-3d643.firebaseapp.com",
  projectId: "js-todolist-3d643",
  storageBucket: "js-todolist-3d643.appspot.com",
  messagingSenderId: "705618940798",
  appId: "1:705618940798:web:a338f42a053416d0a0192f",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };

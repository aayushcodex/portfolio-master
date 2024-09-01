import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "@firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzXPlLZYvPtS7L6yL-TrZSQitj9Lj2jmE",
  authDomain: "portfolio-a05c4.firebaseapp.com",
  projectId: "portfolio-a05c4",
  storageBucket: "portfolio-a05c4.appspot.com",
  messagingSenderId: "199446519783",
  appId: "1:199446519783:web:113a8fa400dc07a6112742",
  measurementId: "G-TV12D92Z9P",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
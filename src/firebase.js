import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeRRFhXuF2seJHvvMPydi54hjiMs9qN_E",
  authDomain: "chat-b3602.firebaseapp.com",
  projectId: "chat-b3602",
  storageBucket: "chat-b3602.appspot.com",
  messagingSenderId: "964278696151",
  appId: "1:964278696151:web:57c07bcf7c734a89309892"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore()
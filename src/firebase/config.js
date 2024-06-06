// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ8fHs1Vl5d0BGHqHw_rdivc6H6qJzXN8",
  authDomain: "chat-project-3b97a.firebaseapp.com",
  projectId: "chat-project-3b97a",
  storageBucket: "chat-project-3b97a.appspot.com",
  messagingSenderId: "627283246005",
  appId: "1:627283246005:web:0574016c278e54a88037fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebase'deki "auth" yapisinin referansini react uygulamasina alma

export const auth = getAuth(app);

//google saglayicisinin kurulumu

export const provider = new GoogleAuthProvider();

//firebase'deki firestore veritabaninin referansini al
export const db = getFirestore(app);

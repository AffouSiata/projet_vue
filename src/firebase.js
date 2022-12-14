
import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";
import {getFirestore}  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0z9nfEX-a5sFpYiNO9E_QDw7nxSbVs20",
  authDomain: "projet-sante-487a2.firebaseapp.com",
  projectId: "projet-sante-487a2",
  storageBucket: "projet-sante-487a2.appspot.com",
  messagingSenderId: "439795146705",
  appId: "1:439795146705:web:630be33c18f24f2a41caf0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth(app)

// db.getFirestore.settings({ timestampsInSnapshots: true })
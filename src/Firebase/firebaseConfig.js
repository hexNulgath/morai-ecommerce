import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFQEYG7QgieOkQJqQhLV80k8fZbGlCatQ",
  authDomain: "morai-ecommerce.firebaseapp.com",
  projectId: "morai-ecommerce",
  storageBucket: "morai-ecommerce.appspot.com",
  messagingSenderId: "559817225061",
  appId: "1:559817225061:web:dbdd5b9b0e3dae554be78c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

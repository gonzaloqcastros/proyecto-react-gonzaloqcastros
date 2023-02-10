import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeRkfTxcYnzqLWpTrOkfhESVLYNGui92M",
  authDomain: "tienda-proyecto-93000.firebaseapp.com",
  projectId: "tienda-proyecto-93000",
  storageBucket: "tienda-proyecto-93000.appspot.com",
  messagingSenderId: "328644525734",
  appId: "1:328644525734:web:6e4c374d29a4f01365fe67"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

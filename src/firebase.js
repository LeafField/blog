import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAJqE-Gl4h8ZS2BExTnzfbWMHo-r60Vquo",
  authDomain: "blog-25022.firebaseapp.com",
  projectId: "blog-25022",
  storageBucket: "blog-25022.appspot.com",
  messagingSenderId: "110443308150",
  appId: "1:110443308150:web:d2689b1f80c5ff248d2b57"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

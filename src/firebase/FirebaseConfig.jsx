// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABGupBg6OSTKTHxipNWe2yas6qfkcCbtI",
  authDomain: "shopx-e-commerce.firebaseapp.com",
  projectId: "shopx-e-commerce",
  storageBucket: "shopx-e-commerce.appspot.com",
  messagingSenderId: "359506935623",
  appId: "1:359506935623:web:dc22c608a4b2cfc1d41662",
  measurementId: "G-HMH7EFH09L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB=getFirestore(app);
const auth=getAuth(app);

export {auth,fireDB}
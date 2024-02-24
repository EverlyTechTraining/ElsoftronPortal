import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkzhNDZYSww2HqYtK9tfC6xNzBHDXH0GY",
  authDomain: "test-intern-741da.firebaseapp.com",
  projectId: "test-intern-741da",
  storageBucket: "test-intern-741da.appspot.com",
  messagingSenderId: "534632235251",
  appId: "1:534632235251:web:e4e3de8c8dd49856d37786"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

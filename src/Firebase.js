// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr0puRL1d27qe7MJqpOtM2Lq_UFfNsT2I",
  authDomain: "finalproject-3d8de.firebaseapp.com",
  projectId: "finalproject-3d8de",
  storageBucket: "finalproject-3d8de.appspot.com",
  messagingSenderId: "124126650857",
  appId: "1:124126650857:web:8e7ea3259ec5265deaab78"
};


const app = initializeApp(firebaseConfig);

// Initialize Auth after the app has been initialized
const auth = getAuth(app);

// Export the app and auth
export { auth, app };

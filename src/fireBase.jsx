import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyASC9PSuJcVHR1AAYyCf-bngDVSL1CcseI",
  authDomain: "bisicle-9d909.firebaseapp.com",
  projectId: "bisicle-9d909",
  storageBucket: "bisicle-9d909.firebasestorage.app",
  messagingSenderId: "76233613947",
  appId: "1:76233613947:web:9ad6b78724c47df106b8de",
  measurementId: "G-1KG6MF5RES"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app
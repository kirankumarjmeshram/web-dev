import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC-phso2vdxMLN-uM7teEkhOL8Gh0akHAM",
    authDomain: "otp-varifiction.firebaseapp.com",
    projectId: "otp-varifiction",
    storageBucket: "otp-varifiction.appspot.com",
    messagingSenderId: "496420716349",
    appId: "1:496420716349:web:67fb6177112254b3090f54"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDUARZPJy55h4VZfs6SGxap9QC38Lio0OU",
    authDomain: "backend-7cdb9.firebaseapp.com",
    projectId: "backend-7cdb9",
    storageBucket: "backend-7cdb9.firebasestorage.app",
    messagingSenderId: "156868903433",
    appId: "1:156868903433:web:d46f90d2be08e128cfeed8",
    measurementId: "G-STT8RZPWMM",
    databaseURL: "https://backend-7cdb9-default-rtdb.firebaseio.com/",
  };
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const database = getDatabase(app);
export const provider = new GoogleAuthProvider();
auth.languageCode = 'en'
export { app }
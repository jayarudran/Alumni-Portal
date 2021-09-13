import firebase from "firebase";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: "alumni-portal-316308.appspot.com",
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId:process.env.APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();

export default app;

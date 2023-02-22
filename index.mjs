// FIREBASE //
import { initializeApp } from 'firebase/app';


// Add Firebase products that you want to use
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY ,
    authDomain: process.env.AUTH_DOMAIN ,
    projectId: process.env.PROJECT_ID ,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const GetWolfs = () => {
  return getDocs(collection(db, "infos"))
};

export const GetGoose = () => {
return getDocs(collection(db, "certifications"))
}
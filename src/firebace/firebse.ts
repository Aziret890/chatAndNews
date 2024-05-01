import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

function FireBaseInit() {
  const firebaseConfig = {
    apiKey: "AIzaSyDvw7rXdRr3vZdVYOluCL1mIId8ly0lOYY",
    authDomain: "chatnews-9a26f.firebaseapp.com",
    databaseURL:
      "https://chatnews-9a26f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chatnews-9a26f",
    storageBucket: "chatnews-9a26f.appspot.com",
    messagingSenderId: "29980769182",
    appId: "1:29980769182:web:9cf9b335ce51702b9fb48f",
    measurementId: "G-G88YNRXVQ6",
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const database = getDatabase(app);
  return { auth, db, storage, database, app };
}

export const { db } = FireBaseInit();

export default FireBaseInit;

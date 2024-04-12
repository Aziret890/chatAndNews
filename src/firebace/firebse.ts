import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
function FireBaseInit() {
  const firebaseConfig = {
    apiKey: "AIzaSyBARYeqnMRCLe1gtTb8pOYqBgU7JVwecQU",
    authDomain: "newschat-1a09c.firebaseapp.com",
    projectId: "newschat-1a09c",
    storageBucket: "newschat-1a09c.appspot.com",
    messagingSenderId: "236171000050",
    appId: "1:236171000050:web:f72f92ad74c71f05fef86b",
    measurementId: "G-59RQEJTDM6",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
}

export default FireBaseInit;

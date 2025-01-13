// Import the functions you need from the SDKs you need
// compat packages are API compatible with namespaced code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "***************************************",
  authDomain: "pictionis-3f0f5.firebaseapp.com",
  projectId: "pictionis-3f0f5",
  storageBucket: "pictionis-3f0f5.appspot.com",
  messagingSenderId: "566292223823",
  appId: "1:566292223823:web:2338b46516d5cea5b2d73a"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
auth.onAuthStateChanged(user => { 
  // Check for user status
});


export { auth };

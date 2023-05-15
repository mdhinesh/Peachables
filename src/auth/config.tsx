// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9fspy37elEHF18MuqaXmojHHDRKPqYW4",
  authDomain: "brainbuster-fba66.firebaseapp.com",
  databaseURL: "https://brainbuster-fba66-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "brainbuster-fba66",
  storageBucket: "brainbuster-fba66.appspot.com",
  messagingSenderId: "765044216358",
  appId: "1:765044216358:web:9267c879e82fa422facce7",
  measurementId: "G-HJ9EZTKDKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get the Auth instance
export const auth = getAuth(app);

// Create new account using email/password
export const createAccount = async (email: string, password: string): Promise<void> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);  
    } catch (error) {
      console.log(`There was an error: ${error}`);
      // handle error here or throw the error to be handled elsewhere
      throw error;
    }
};
  
// Login using email/password
export const loginEmailPassword = async (loginEmail: string, loginPassword: string): Promise<void> => {

  // step 1: try doing this w/o error handling, and then add try/catch
  // await signInWithEmailAndPassword(auth, loginEmail, loginPassword)

  // step 2: add error handling
  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  }
  catch(error) {
    console.log(`There was an error: ${error}`)
    // showLoginError(error)
    throw error
  }
}

// Monitor auth state
export const monitorAuthState = async (showLoginState?: any, showLoginForm?: any) => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user)
      // showApp()
      showLoginState(user)
      // hideLoginError()
      // hideLinkError()
    }
    else {
      console.log(`You're not logged in.`);
      // If the url is login don't call the showLoginForm function
      if (window.location.pathname !== '/login'){
        showLoginForm();
      }
    }
  })
  console.log("monitorAuthState() called here");
}

// Log out
export const logout = async () => {
  await signOut(auth);
}


// monitorAuthState();
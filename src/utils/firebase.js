// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendSignInLinkToEmail} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrk0_NXJmady3pTzqwecMHwiK5nLgB8FE",
  authDomain: "netflix-gpt-7c545.firebaseapp.com",
  projectId: "netflix-gpt-7c545",
  storageBucket: "netflix-gpt-7c545.appspot.com",
  messagingSenderId: "762325511125",
  appId: "1:762325511125:web:0516d732c81fa84397eb5c",
  measurementId: "G-DB4KHB23GX"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();


export function createAccount(email,password,seterror,navigate){
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value,)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   
    navigate('/browse')
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterror(errorMessage)
    // ..
  });}


export function signIn(email,password,seterror,navigate){   
// const auth = getAuth();
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/browse')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterror({errorMessage})
  });
  }

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://wwe.com',
    // This must be true.
    handleCodeInApp: true,
    // iOS: {
    //   bundleId: 'com.example.ios'
    // },
    // android: {
    //   packageName: 'com.example.android',
    //   installApp: true,
    //   minimumVersion: '12'
    // },
    // dynamicLinkDomain: 'example.page.link'
  };

export function signInWithoutPassword(email){
  // const auth = getAuth();
sendSignInLinkToEmail(auth, email.current.value, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email.current.value);
    console.log(email.current.value)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
    // ...
  });
  }


  
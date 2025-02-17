// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendSignInLinkToEmail,signOut,sendPasswordResetEmail,isSignInWithEmailLink,signInWithEmailLink} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "geminiflix7.firebaseapp.com",
  projectId: "geminiflix7",
  storageBucket: "geminiflix7.firebasestorage.app",
  messagingSenderId: "517384364014",
  appId: "1:517384364014:web:f556eac942cd05978d38ff",
  measurementId: "G-FQYLRJXMMV"
};
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);


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
    const errorMessage = error.message;
    seterror({errortype:"signUp",errorMessage:[errorMessage]})
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
    
    const errorMessage = error.message;
    seterror({errortype:"signIn",errorMessage:[errorMessage]})
  });
  }


 
export function signOutfromAccount(navigate){
  signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
 console.log(error)
});}

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://amaanxmd.github.io/GeminiFlix/#/browse',
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
  export function signInWithoutPassword(email,seterror,setlinksentSuccessfully){
    // const auth = getAuth();
    sendSignInLinkToEmail(auth, email.current.value, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email.current.value);
      setlinksentSuccessfully("Link Sent to Email Successfully")
      seterror(null)
      
    })
    .catch((error) => {
      
      const errorMessage = error.message;
      setlinksentSuccessfully("Message and data rates may apply")
      seterror({errortype:"sendSignInLink",errorMessage:[errorMessage]})
      
    });
  }

  export function checkIfLinkValid(navigate,seterror){
    if(isSignInWithEmailLink(auth,window.location.href))
    {
      let email = localStorage.getItem('emailForSignIn');
    
    if (!email) {
        email = prompt('Enter your email for confirmation:');
    }
      signInWithEmailLink(auth,email, window.location.href)
             .then((result) => {
                 localStorage.removeItem("emailForSignIn");
                 
                // Remove query parameters AFTER Firebase processes them
                const url = new URL(window.location.href);
                url.search = ""; // Removes everything after '?' (query parameters)
                window.history.replaceState({}, document.title, url.toString());
                //  navigate('/browse',{replace:true})
             })
             .catch((error) => {
              const errorMessage=error.message
              seterror({errortype:"signInWithEmailLink",errorMessage:[errorMessage]})
             })
    }

  }
  
  
  export function resetPassword(email,setlinksentSuccessfully,seterror){
    sendPasswordResetEmail(auth, email.current.value)
    .then(() => {
      setlinksentSuccessfully("Password reset link sent to mail")
      seterror(null)
    })
    .catch((error) => {
      
      const errorMessage = error.message;
      seterror({errortype:"resetPassword",errorMessage:[errorMessage]})
      setlinksentSuccessfully("")
    });
  }
  
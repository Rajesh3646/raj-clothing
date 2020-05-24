import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDy1MdtJwHuxgFkZ6C-GymuiWngoX1yHL8",
    authDomain: "reactjs-6c938.firebaseapp.com",
    databaseURL: "https://reactjs-6c938.firebaseio.com",
    projectId: "reactjs-6c938",
    storageBucket: "reactjs-6c938.appspot.com",
    messagingSenderId: "144018399107",
    appId: "1:144018399107:web:e93685b434a2a52b7de0b6"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = new firebase.auth();
  export const firestore = new firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase

  export const createUserProfileDocument = async (userAuth, additionalProps) => {
    if(!userAuth) return;
    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const {displayName, email} = userAuth;
      const createAt = new Date();
      try {
        console.log({
          displayName, email, createAt, ...additionalProps
        });

        //property shorthand notation
        await userRef.set({
          displayName, email, createAt, ...additionalProps
        });
      } catch(error){
        console.log('An error occured while creating a user' + error.message);
      }
      
    }
    return userRef;
  }
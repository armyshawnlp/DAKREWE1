import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth"; 

const prodConfig = {
    apiKey: "AIzaSyDTtzylCA17Vad0uP0GjGABFTXlak5otSQ",
    authDomain: "dakrewduroux.firebaseapp.com",
    databaseURL: "https://dakrewduroux.firebaseio.com",
    projectId: "dakrewduroux",
    storageBucket: "dakrewduroux.appspot.com",
    messagingSenderId: "804014336269",
    appId: "1:804014336269:web:c85b3f85976fe8a7"
  };

  const devConfig = {
    apiKey: "AIzaSyDTtzylCA17Vad0uP0GjGABFTXlak5otSQ",
    authDomain: "dakrewduroux.firebaseapp.com",
    databaseURL: "https://dakrewduroux.firebaseio.com",
    projectId: "dakrewduroux",
    storageBucket: "dakrewduroux.appspot.com",
    messagingSenderId: "804014336269",
    appId: "1:804014336269:web:c85b3f85976fe8a7"
  };

//
//firebase.initializeApp(config);
//

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};



try {
	firebase.initializeApp(firebaseConfig);
	firebase.firestore();
	console.log("Firebase Initialized");
} catch (err) {
	console.log("Error Initializing Firebase");
}

export default firebase;





// const onValueChange = database.ref().on('value', (snapshot) =>  {
//   console.log(snapshot.val());
// });

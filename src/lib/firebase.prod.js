import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDcX8ExcOnUDJWTw7xRyqCjzla0SBmbEO8",
    authDomain: "styled-components-netflix.firebaseapp.com",
    projectId: "styled-components-netflix",
    storageBucket: "styled-components-netflix.appspot.com",
    messagingSenderId: "1037266208089",
    appId: "1:1037266208089:web:54c90d4ba3efdbbe39b848"
};

const firebase = Firebase.initializeApp(config);



export { firebase };

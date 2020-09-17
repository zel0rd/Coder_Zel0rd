
import * as firebase from  "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC-Mv2DY7qHSPMVndEmTAoK8U0z01Y0woQ",
    authDomain: "nwitter-4f3d2.firebaseapp.com",
    databaseURL: "https://nwitter-4f3d2.firebaseio.com",
    projectId: "nwitter-4f3d2",
    storageBucket: "nwitter-4f3d2.appspot.com",
    messagingSenderId: "857584654155",
    appId: "1:857584654155:web:dbe8a443d5e63a5e4f7ace"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
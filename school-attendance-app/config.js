import firebase from "firebase"

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFkdPJG1h-Q0ysYoqVcCue8oUmFWMEg0Y",
  authDomain: "student-63573.firebaseapp.com",
  databaseURL: "https://student-63573-default-rtdb.firebaseio.com",
  projectId: "student-63573",
  storageBucket: "student-63573.appspot.com",
  messagingSenderId: "150523768527",
  appId: "1:150523768527:web:c544c233ce9e95978a11ba",
  measurementId: "G-JEHCS7XEJC"
};
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
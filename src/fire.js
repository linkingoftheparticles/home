import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAgYDtauVULemmJlwXVY5NS-nXhWrK3ioE",
  authDomain: "art8-588f2.firebaseapp.com",
  databaseURL: "https://art8-588f2.firebaseio.com",
  projectId: "art8-588f2",
  storageBucket: "art8-588f2.appspot.com",
  messagingSenderId: "438297753640",
  appId: "1:438297753640:web:e02cb1b669ee8b06"
};
var fire = firebase.initializeApp(config);
export default fire;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FirebaseContext } from "./firebase";

 var firebaseConfig = {
   apiKey: "AIzaSyCi8-UzKXUpzW9rmkhw1eo3-Lx9lr9xCe4",
   authDomain: "invoicing-app-ea5f3.firebaseapp.com",
   projectId: "invoicing-app-ea5f3",
   storageBucket: "invoicing-app-ea5f3.appspot.com",
   messagingSenderId: "703027357959",
   appId: "1:703027357959:web:41e68c6ac8284ad1353da2",
 };

 const firebase = window.firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <FirebaseContext.Provider value={ {firebase : window.firebase}}>
    <Router>
      <App />
    </Router> 
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

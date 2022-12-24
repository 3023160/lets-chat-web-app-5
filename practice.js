
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBBGuZTPmOoUAk2gh0mRT61Ts2txgqa-DQ",
    authDomain: "kwit-6f69a.firebaseapp.com",
    databaseURL: "https://kwit-6f69a-default-rtdb.firebaseio.com",
    projectId: "kwit-6f69a",
    storageBucket: "kwit-6f69a.appspot.com",
    messagingSenderId: "120809139750",
    appId: "1:120809139750:web:f852dd9803f8a48d1e00e7",
    measurementId: "G-2ZGY8T4SX0"
  };
  
  // Initialize Firebas
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }
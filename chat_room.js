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

  firebase.initializeApp(firebaseConfig);

  function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getelementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}

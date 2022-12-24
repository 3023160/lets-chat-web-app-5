//YOUR FIREBASE LINKS
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
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row=name_with_tag + message_with_tag +like_button+span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - "+ firebase_message_id)
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
});
}

 function send()
 {
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
 }

 function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}

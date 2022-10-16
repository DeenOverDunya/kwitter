//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDy4G0QgDOj8xK1R-vyVKpzTrZTl6Phg9M",
      authDomain: "kwitter-73e3d.firebaseapp.com",
      databaseURL: "https://kwitter-73e3d-default-rtdb.firebaseio.com",
      projectId: "kwitter-73e3d",
      storageBucket: "kwitter-73e3d.appspot.com",
      messagingSenderId: "525883169141",
      appId: "1:525883169141:web:b7be95792a606fc6301b3c"
    };

    ////////// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
namewithtag="<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
messagewithtag="<h4 class='message_h4'>" +  message  + "</h4>" ;
likebtn="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this_id)'>";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>like: " + like + "</span> </button> <hr>";
row=namewithtag+messagewithtag+likebtn+spanwithtag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0

});
document.getElementById("msg").value="";
}


function updatelike(message_id)
{
console.log("Clicked On Like Button" + message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
like:updated_likes
})
;
}

function logout()
{
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html";
}
var firebaseConfig = {
      apiKey: "AIzaSyDy4G0QgDOj8xK1R-vyVKpzTrZTl6Phg9M",
      authDomain: "kwitter-73e3d.firebaseapp.com",
      databaseURL: "https://kwitter-73e3d-default-rtdb.firebaseio.com",
      projectId: "kwitter-73e3d",
      storageBucket: "kwitter-73e3d.appspot.com",
      messagingSenderId: "525883169141",
      appId: "1:525883169141:web:b7be95792a606fc6301b3c"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome  "+ user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room Name  - " +Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML +=row;

      });});}
getData();



function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function redirecttoroomname(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html"
}



function logout()
{
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location="index.html";




}
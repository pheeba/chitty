function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "chitty" && password == "2024"){
window.location = "index11.html"; 
return false;
}
else{
alert("please enter correctly");
}
}

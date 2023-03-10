var logIn = document.getElementById("logIn");
var userName = document.getElementById("userName");
var loginEmail = document.getElementById("loginEmail");
var loginPass = document.getElementById("LoginPass");
var userArray = [];
function getUser() {
  if (localStorage.getItem("info") != null) {
    userArray = JSON.parse(localStorage.getItem("info"));
  }
}
getUser();
function addUserName() {
  user = {
    loginEmail: document.getElementById("loginEmail").value,
    loginPass: document.getElementById("LoginPass").value,
  };

  userArray.indexOf(user);
}
function loginUser() {
  var loginRegisterdEmail = document.getElementById("loginEmail").value;
  var loginRegisteredPass = document.getElementById("LoginPass").value;

  for (i = 0; i < userArray.length; i++) {
    if (
      userArray[i].userEmail == loginRegisterdEmail &&
      userArray[i].userPass == loginRegisteredPass
    ) {
      localStorage.setItem("name", JSON.stringify(userArray[i].userName));
      window.location.href = "home.html";
      return;
    }
  }

  if (loginRegisterdEmail == "" || loginRegisteredPass == "") {
    document.getElementById("invalid").innerHTML = `Inputs are required`;
  } else {
    document.getElementById("invalid").innerHTML = `Invalid E-mail or Password`;
    document.getElementById("empty").innerHTML = ``;
  }
}
logIn.addEventListener("click", loginUser);

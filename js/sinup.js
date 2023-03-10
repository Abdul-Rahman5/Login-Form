var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPass = document.getElementById("userPass");
var signUp = document.getElementById("signUp");
var userArray = [];

function getUser() {
  if (localStorage.getItem("info") != null) {
    userArray = JSON.parse(localStorage.getItem("info"));
  }
}
getUser();

function checkEmail() {
  var userRegisteredName = document.getElementById("userName").value;
  var userRegisteredEmail = document.getElementById("userEmail").value;
  var userRegisteredPass = document.getElementById("userPass").value;
  for (i = 0; i < userArray.length; i++) {
    if (userArray[i].userEmail == userRegisteredEmail) {
      document.getElementById(
        "invalid"
      ).innerHTML = `<p>E-mail already exists</p>`;
      document.getElementById("confirmation").innerHTML = ``;
      return;
    }
  }
  if (
    userRegisteredEmail == "" ||
    userRegisteredName == "" ||
    userRegisteredPass == ""
  ) {
    document.getElementById("invalid").innerHTML = `<p>inputs are required</p>`;
  } else {
    addUser();
    document.getElementById("confirmation").innerHTML = `<p>success</p>`;
    document.getElementById("invalid").innerHTML = ``;
    clearForm();
  }
}
function clearForm() {
  var userName = (document.getElementById("userName").value = "");
  var userEmail = (document.getElementById("userEmail").value = "");
  var userPass = (document.getElementById("userPass").value = "");
}

function addUser() {
  user = {
    userName: document.getElementById("userName").value,
    userEmail: document.getElementById("userEmail").value,
    userPass: document.getElementById("userPass").value,
  };
  userArray.push(user);
  localStorage.setItem("info", JSON.stringify(userArray));
}
signUp.addEventListener("click", checkEmail);

var logout = document.getElementById("logout");
var userArray = [];
function getUser() {
  if (localStorage.getItem("info") != null) {
    var greetName = localStorage.getItem("name");
    document.getElementById( "greetings"  ).innerHTML = `<h1 class="text-info" > Welcome ${ greetName } </h1>`;
  }
}
getUser();

function logoutPage() {
  window.location.href = "index.html";
}

logout.addEventListener("click", logoutPage);

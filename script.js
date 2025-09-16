function login() {
  const username = document.getElementById("username").value.trim();
  if(username) {
    localStorage.setItem("user", username);
    showPage();
  } else {
    alert("Please enter username");
  }
}

function logout() {
  localStorage.removeItem("user");
  showPage();
}

function showPage() {
  const user = localStorage.getItem("user");
  if (user) {
    document.getElementById("guest").style.display = "none";
    document.getElementById("loggedIn").style.display = "block";
    document.getElementById("user").innerText = user;
  } else {
    document.getElementById("guest").style.display = "block";
    document.getElementById("loggedIn").style.display = "none";
    document.getElementById("user").innerText = "";
  }
}

showPage();




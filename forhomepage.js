document.getElementById("registerButton").onclick = function () {
  location.href = "event-page.html";
};

document.getElementById("register-Button").onclick = function () {
  location.href = "event-page.html";
};

document.getElementById("Brochure").onclick = function () {
  location.href = "brochurepage.html";
};

document.getElementById("goTeam").onclick = function () {
  location.href = "team-page.html";
};

document.getElementById("goContact").onclick = function () {
  location.href = "contact-page.html";
};

document.getElementById("rulebook-here").addEventListener("click", function() {
  console.log("Button clicked!"); // Add this line
  window.open("https://drive.google.com/file/d/1ahujVsLW6hIUGV1sC8nga35eRdgdxL1i/view", "_blank");
});
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
  var omyFrame = document.getElementById("myFrame");
  omyFrame.style.display = "block"; // Show the iframe
  omyFrame.src = "YOUR_GOOGLE_DRIVE_LINK_HERE";  // Set the PDF source
});
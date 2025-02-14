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

document.getElementById("rulebook-Button").addEventListener("click", function() {
  // Specify the path to your PDF file
  const pdfUrl = "C:\Users\Shrikant\Downloads\VORTEX_25_RULEBOOK.pdf";
  
  // Open the PDF in a new tab
  window.open(pdfUrl, "_blank");
});
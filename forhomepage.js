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

document.getElementById("rulebook-Button").addEventListener("click", function () {
  // Use forward slashes OR double backslashes in the file path
  const pdfUrl = "C:/Users/Shrikant/Downloads/ISTE-website-SP/VORTEX_25_RULEBOOK.pdf";

  console.log("Button clicked! Trying to open PDF:", pdfUrl); // Debug log

  if (pdfUrl) {
      window.open(pdfUrl, "_blank"); // Open PDF in a new tab
  } else {
      console.error("PDF path not specified or incorrect!");
  }
});

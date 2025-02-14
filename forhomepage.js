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
  const pdfUrl = "C:\Users\Shrikant\Downloads\ISTE-website-SP\VORTEX_25_RULEBOOK.pdf";  // Update this with the actual path
  
  console.log("Button clicked! Trying to open PDF:", "C:\Users\Shrikant\Downloads\ISTE-website-SP\VORTEX_25_RULEBOOK.pdf"); // Debug log
  
  // Check if the URL exists
  if (pdfUrl) {
      window.open("C:\Users\Shrikant\Downloads\ISTE-website-SP\VORTEX_25_RULEBOOK.pdf", "_blank"); // Open PDF in a new tab
  } else {
      console.error("PDF path not specified or incorrect!");
  }
});
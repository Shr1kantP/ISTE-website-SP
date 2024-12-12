const registerButton = document.getElementById("registerButton");

registerButton.addEventListener("click", () => {

    window.location.href = "event-page.html";
});

// Optimized Code
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
      image.addEventListener('click', (event) => {
        // Do something on click, using event.target
      });
    });
  });
  
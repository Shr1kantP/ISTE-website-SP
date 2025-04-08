document.addEventListener("DOMContentLoaded", function () {
    const parallaxLayer = document.querySelector(".parallax-layer img");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("close-btn");

    // Parallax effect
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const parallaxSpeed = 0.5;
        parallaxLayer.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
    });

    // Lightbox functionality
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const img = item.querySelector("img");
            lightboxImage.src = img.dataset.full || img.src;
            lightboxCaption.textContent = item.querySelector(".gallery-caption").textContent;
            lightbox.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Scroll animation
    const sections = document.querySelectorAll("[data-reveal]");
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
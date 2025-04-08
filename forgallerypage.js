document.addEventListener("DOMContentLoaded", function () {
    // Parallax setup
    const parallaxLayer = document.querySelector(".parallax-layer");
    const parallaxImages = parallaxLayer ? parallaxLayer.querySelectorAll("img") : [];
    const firstImage = parallaxImages[0];
    const secondImage = parallaxImages[1];
    const copyrightFooter = document.querySelector(".copyright-footer");

    // Set initial position of second image below the first (if both exist)
    if (firstImage && secondImage) {
        const initialTop = firstImage.offsetHeight;
        secondImage.style.top = `${initialTop}px`;
    } else {
        console.warn("Parallax images not fully loaded: firstImage or secondImage is missing.");
    }

    // Variables to track scroll position and lock point
    let lastScrollPosition = window.scrollY;
    let scrollLockPosition = null;

    // Parallax and scroll lock effect
    window.addEventListener("scroll", function () {
        const currentScrollPosition = window.scrollY;
        const footerRect = copyrightFooter.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the scroll position where the copyright footer's bottom reaches the viewport's bottom
        const footerBottomPosition = currentScrollPosition + footerRect.bottom;

        // Determine scroll direction
        const scrollingDown = currentScrollPosition > lastScrollPosition;

        // If scrolling down and footer's bottom reaches or passes the viewport's bottom, set the lock position
        if (scrollingDown && footerRect.bottom <= windowHeight && scrollLockPosition === null) {
            scrollLockPosition = currentScrollPosition;
        }

        // If scroll lock is active and scrolling down, prevent going past lock position
        if (scrollLockPosition !== null && scrollingDown && currentScrollPosition > scrollLockPosition) {
            window.scrollTo(0, scrollLockPosition);
            // Apply parallax at the locked position
            if (firstImage) {
                const offset1 = scrollLockPosition * 0.5;
                firstImage.style.transform = `translateY(${offset1}px)`;
            }
            if (secondImage) {
                const offset2 = scrollLockPosition * 0.3;
                secondImage.style.transform = `translateY(${offset2}px)`;
            }
        } else {
            // Normal parallax movement when not locked or scrolling up
            if (firstImage) {
                const speed1 = 0.5;
                const offset1 = currentScrollPosition * speed1;
                firstImage.style.transform = `translateY(${offset1}px)`;
            }
            if (secondImage) {
                const speed2 = 0.3;
                const offset2 = currentScrollPosition * speed2;
                secondImage.style.transform = `translateY(${offset2}px)`;
            }

            // Reset lock if scrolling back up
            if (currentScrollPosition < scrollLockPosition) {
                scrollLockPosition = null;
            }
        }

        // Update last scroll position
        lastScrollPosition = currentScrollPosition;
    });

    // Lightbox elements
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("close-btn");

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

    // Navigation buttons with error checking
    const homeButton = document.getElementById("home");
    const contactButton = document.getElementById("goContact");
    const teamButton = document.getElementById("team");
    const galleryButton = document.getElementById("gallery");

    if (homeButton) {
        homeButton.onclick = function () {
            location.href = "index.html";
        };
    } else {
        console.warn("Home button with id='home' not found in the HTML.");
    }

    if (contactButton) {
        contactButton.onclick = function () {
            location.href = "contact-page.html";
        };
    } else {
        console.warn("Contact button with id='goContact' not found in the HTML.");
    }

    if (teamButton) {
        teamButton.onclick = function () {
            location.href = "team-page.html";
        };
    } else {
        console.warn("Team button with id='team' not found in the HTML.");
    }

    if (galleryButton) {
        galleryButton.onclick = function () {
            location.href = "gallery-page.html";
        };
    } else {
        console.warn("Gallery button with id='gallery' not found in the HTML.");
    }
});
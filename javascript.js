function adjustPageWidth() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 992 && screenWidth <= 1600) {
        document.body.style.transform = "scale(0.9)";
    } else if (screenWidth >= 700 && screenWidth <= 767) {
        document.body.style.transform = "scale(0.8)";
    } else if (screenWidth >= 600 && screenWidth < 700) {
        document.body.style.width = "75%";
        document.body.style.margin = "0 auto";
    } else if (screenWidth <= 600) {
        document.body.style.width = "50%";
        document.body.style.margin = "0 auto";
    }
}

// Call the function on initial page load
adjustPageWidth();

// Call the function again if the window is resized
window.addEventListener('resize', adjustPageWidth);

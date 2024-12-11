     // scripts.js

// i am  using this to enable side bar interaction and usability
function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    menu.classList.toggle("open");
}
// this code will close the sidebar if clicked outside of it
window.onclick = function(event) {
    var menu = document.getElementById("sideMenu");
    var menuButton = document.querySelector(".menu-btn");
    // Close the sidebar if click is outside the sidebar and menu button
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove("open");
    }
}
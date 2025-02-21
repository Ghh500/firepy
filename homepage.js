// Get the username from localStorage
const username = localStorage.getItem("username");

// Check if the username exists
if (username) {
    const firstLetter = username.charAt(0).toUpperCase();
    document.getElementById("profile-icon").textContent = firstLetter;
}

// Function to toggle the dropdown menu visibility
function toggleMenu() {
    var menu = document.getElementById("dropdown-menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Function to handle submenu toggle
function toggleSubmenu(event) {
    const submenuId = event.target.getAttribute('data-submenu');
    const submenu = document.getElementById(submenuId);
    if (submenu) {
        submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
    }
}

// Close the dropdown if the user clicks anywhere outside of the profile icon
window.onclick = function(event) {
    var menu = document.getElementById("dropdown-menu");
    if (!event.target.matches('.profile, .profile *')) {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        }
    }
}

// Function to log out
function logout() {
    localStorage.removeItem("username");
    window.location.href = "index.html";
}

// Add event listener to the profile icon for dropdown toggle
document.getElementById("profile-icon").addEventListener("click", toggleMenu);

// Add event listeners to menu items for submenu toggling
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', toggleSubmenu);
});

// Close submenus if clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.matches('.menu-item, .menu-item *')) {
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.style.display = 'none';
        });
    }
});

// Get the theme toggle button
const themeToggleButton = document.getElementById("theme-toggle");

// Check the current theme in localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
    applyLightTheme();
} else {
    applyDarkTheme();
}

// Function to apply light theme
function applyLightTheme() {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";

    // Change header background and text color
    // document.querySelector("header").style.backgroundColor = "#f5f5f5";
    // document.querySelector("header").style.color = "#000";

    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "#f0f0f0";
        item.style.color = "#000";
        item.style.border = "1px solid black"; // Add black thin border
    });

    themeToggleButton.classList.remove("off");
    themeToggleButton.classList.add("on");
    themeToggleButton.textContent = "Dark";
    localStorage.setItem("theme", "light");
}

// Function to apply dark theme
function applyDarkTheme() {
    document.body.style.backgroundColor = "#1c1c1e";
    document.body.style.color = "#f0f0f0";

    // Change header background and text color
    // document.querySelector("header").style.backgroundColor = "#121212";
    // document.querySelector("header").style.color = "#f0f0f0";

    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "#282828";
        item.style.color = "#fff";
        item.style.border = "none"; // Remove border in dark mode
    });

    themeToggleButton.classList.remove("on");
    themeToggleButton.classList.add("off");
    themeToggleButton.textContent = "Light";
    localStorage.setItem("theme", "dark");
}

// Event listener to toggle theme
themeToggleButton.addEventListener("click", function() {
    if (themeToggleButton.classList.contains("on")) {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
});

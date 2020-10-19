const toggle = document.querySelector("nav-button")
const menu = document.querySelector("#main-nav-list"):

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.innerHTML = "&#9776;"
    } else {
        menu.classListadd("active");
        
        toggle.innerHTML = "X";
    }
}

toggle.addEventListener("click", toggleMenu, false);
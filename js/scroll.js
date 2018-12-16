let position = 400;
let screenWidth;


function getScreenWidth() {
    screenWidth = window.innerWidth;
}

function scrollpos() {
    getScreenWidth();
    let top = window.scrollY;
    let navbar = document.getElementById("nav-bar");
    let links = document.getElementById("nav-links");

    if(screenWidth > 700){
        if(top >= position){
            navbar.style.cssText = "width:230px;";
            links.style.cssText = "display:none;";
        }
        else if(top < position){
            navbar.style.cssText = "width:100%;";
            links.style.cssText = "display:grid;";
        }
    }
}



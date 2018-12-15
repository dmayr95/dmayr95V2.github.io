let position = 400;
let screenWidth;
let hilfsvar = 0;


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

function showMenu(){
    let menuContainer = document.getElementById("nav-bar");

    if(hilfsvar === 0){
        menuContainer.style.cssText = "margin-left:0px !important;";
        hilfsvar = 1;
    }
    else{
        menuContainer.style.cssText = "margin-left:-180px !important;";
        hilfsvar = 0;
    }
}


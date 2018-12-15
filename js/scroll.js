var position = 400;

function scrollpos() {
    var elemnt = document.getElementById("body");
    var top = window.scrollY;
    console.log(top);

    var navbar = document.getElementById("nav-bar");
    var links = document.getElementById("nav-links");

    if(top >= position){
        navbar.style.cssText = "width:230px;}";
        links.style.cssText = "display:none;";
    }
    else if(top < position){
        navbar.style.cssText = "width:100%;}";
        links.style.cssText = "display:grid; ";
    }

}


function toggleSidebarMenu() {
    document.getElementById("sidebar").classList.toggle('visible');
    document.getElementById("sidebar-button").style.position = "fixed";

}

function closeSideBar() {
    document.getElementById("sidebar").classList.toggle("visible");
    document.getElementById("sidebar-button").style.position = "absolute";
}

// animate(resize and color) menu bar on scrolling down

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    const menuBar = document.getElementsByClassName("menu-bar");
    const sidebarBtn = document.getElementById("sidebar-button");
    const spanArr =  sidebarBtn.getElementsByTagName("span");
    if(window.pageYOffset > 50 ) {
        // console.log("scrolling down");
        menuBar[0].style.backgroundColor = "black";
        menuBar[0].style.color = "white";
        // menubar[0].
        for (items of spanArr) {
            items.style.backgroundColor = "white";
        }
        // spanArr[0].style.backgroundColor = "white";
    }
    else if (window.pageYOffset == 0){
        // console.log("scrolling up");
        menuBar[0].style.backgroundColor = "transparent";
        menuBar[0].style.color = "black";
        for (items of spanArr) {
            items.style.backgroundColor = "black";
        }
    }
}
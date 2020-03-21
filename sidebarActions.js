function toggleSidebarMenu() {
    document.getElementById("sidebar").classList.toggle('visible');
    document.getElementById("sidebar-button").style.position = "fixed";

}

function closeSideBar() {
    document.getElementById("sidebar").classList.toggle("visible");
    document.getElementById("sidebar-button").style.position = "absolute";
}
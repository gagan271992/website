function toggleSidebarMenu() {
    document.getElementById("sidebar").classList.toggle('visible');

}

document.addEventListener('click', (evt) => {
    const sidebarElement = document.getElementById("sidebar");
    const sidebarButton = document.getElementById("sidebar-button");
    let clickedElem = evt.target;
    
    if (clickedElem!=sidebarElement && clickedElem!=sidebarButton) {
        document.getElementById("sidebar").classList.remove('visible');
    }
})
function displaySidebar(){
    const sb = document.querySelector(".sidebar");
    sb.style.display = "flex";
}

function hideSidebar(){
    const sb = document.querySelector(".sidebar");
    sb.style.display = "none";

}

window.addEventListener('resize', function(){
    const home = document.querySelector(".smallScreeHide")
    if(home.offsetHeight > 0){
        const sb = document.querySelector(".sidebar");
        sb.style.display = "none";
    }
}, true);
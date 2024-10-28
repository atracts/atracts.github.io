<<<<<<< HEAD
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
=======
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
>>>>>>> 8716f48c6518249b706e0a5a8badb43423ba636b
}, true);
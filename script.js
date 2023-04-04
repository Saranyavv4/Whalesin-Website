const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');


document.onscroll = () => {
    const menuToggle = document.getElementById("menu-toggle")
    const mn = document.getElementById("menu-main")
    if(menuToggle.checked){
        menuToggle.checked = false
        mn.style.height = "0px"
        mn.style.transition = "height 400ms cubic-bezier(0.23, 1, 0.32, 1)"
    }
}

function goTo(service){
    document.location.href = '/'+service+'.html'
}

function checkMenu(){
    var chk = document.getElementById("menu-toggle").checked
    const mn = document.getElementById("menu-main")
    if(chk){
        mn.style.height = "30em"
        mn.style.transition = "height 400ms cubic-bezier(0.23, 1, 0.32, 1)"
    }else{
        mn.style.height = "0px"
        mn.style.transition = "height 400ms cubic-bezier(0.23, 1, 0.32, 1)"
    }
}
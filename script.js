const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

const myBtn = document.getElementById("myButton")
const myMenu = document.getElementById("myNav")
var isMenuShow = false;
myBtn.addEventListener('click',()=>{
    myBtn.classList.toggle('fa-close');
    if(!isMenuShow){
        isMenuShow = true;
        myMenu.style.visibility = "visible";
        //myMenu.style.opacity = "1"
    }else{
        isMenuShow = false;
        myMenu.style.visibility = "hidden";
        //myMenu.style.opacity = "0"
    }
})


/*menuButton.addEventListener('click', ()=>{
    //var myNav = document.getElementById("myNav")
    //var myBtn = document.getElementById("myButton")
    navbar.classList.remove('show');
    myBtn.classList.toggle('fa-close');
})*/

document.onscroll = () =>{
    //navbar.classList.remove('show');
    if(isMenuShow){
        isMenuShow = false;
        myMenu.style.visibility = "hidden";
    }
    menuButton.classList.remove('fa-close');

    if (window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};


document.onload = () =>{
    if (window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

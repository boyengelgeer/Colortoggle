// background change functie

let homeColor = document.querySelector("#grey");
let redColor = document.querySelector("#red");
let orangeColor = document.querySelector("#orange");
let purpleColor = document.querySelector("#purple");
let greenColor = document.querySelector("#green");

homeColor.addEventListener("click", e => {
    document.body.style.backgroundColor = "grey";

});

redColor.addEventListener("click", e => {
    document.body.style.backgroundColor = "red";

});

orangeColor.addEventListener("click", e => {
    document.body.style.backgroundColor = "orange";

});

purpleColor.addEventListener("click", e => {
    document.body.style.backgroundColor = "purple";

});

greenColor.addEventListener("click", e => {
    document.body.style.backgroundColor = "green";

});



// menu slide functie

let toggleNavStatus = false

const getNavBar = document.querySelector(".nav-main");
const hamburger = document.querySelector(".toggle-button");
const colorList = document.querySelector(".color-list");

const toggleNavOn = function () {

    if (toggleNavStatus === false) {

        getNavBar.style.transform = "translateX(235px)";

        toggleNavStatus = true;
    }
    // Deze gebruikte ik bij de onclick versie, dat werkte perfect.

    /*   else if (toggleNavStatus = true) {
  
          getNavBar.style.transform = "translateX(-310px)";
  
          toggleNavStatus = false;
      } */

}

hamburger.addEventListener('mouseenter', e => {
    toggleNavOn();
});



const toggleNavOff = function () {

    if (toggleNavStatus === true) {

        getNavBar.style.transform = "translateX(-310px)";
        


        toggleNavStatus = false;
    }



}

colorList.addEventListener('mouseleave', e => {
    toggleNavOff();
});





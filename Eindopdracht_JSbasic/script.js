// background change functie

function changeGroundColor(color) {
    document.body.style.background = color
}

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

colorList.addEventListener('mouseleave', e => {
    console.log("hi")
    toggleNavOff();
});

const toggleNavOff = function () {

    if (toggleNavStatus === true) {

        getNavBar.style.transform = "translateX(-310px)";


        toggleNavStatus = false;
    }



}






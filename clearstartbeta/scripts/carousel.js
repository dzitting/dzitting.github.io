const leftArrow = document.getElementById("arrow-l-icon"); //Getting and defining arrows from html
const rightArrow = document.getElementById("arrow-r-icon");
const galleryContainer = document.getElementById("modal-gallery");
let intervalId;

leftArrow.addEventListener("mouseover", (event) => { //Listens for mouseover to scroll in either left/right direction by +-10px
    intervalId = setInterval(() => {
        galleryContainer.scrollBy(-10, 0);
    }, 50);
}, false);

leftArrow.addEventListener("mouseout", (event) => {
    clearInterval(intervalId);
}, false);

rightArrow.addEventListener("mouseover", (event) => {
    intervalId = setInterval(() => {
        galleryContainer.scrollBy(10, 0);
    }, 50);
}, false);

rightArrow.addEventListener("mouseout", (event) => {
    clearInterval(intervalId);
}, false);
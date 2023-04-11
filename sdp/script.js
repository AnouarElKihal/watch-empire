//Navigation bar effect on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector(".navSection");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Scrolling Gallery
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

//-----------------------------------------------------------------------------------------------//

const carousel2 = document.querySelector(".carousel2"),
firstImg2 = carousel.querySelectorAll("img")[0],
arrowIcons2 = document.querySelectorAll(".wrapper2 i");

let isDragStart2 = false, isDragging2 = false, prevPageX2, prevScrollLeft2, positionDiff2;

const showHideIcons2 = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth2 = carousel2.scrollWidth - carousel2.clientWidth; // getting max scrollable width
    arrowIcons2[0].style.display = carousel2.scrollLeft == 0 ? "none" : "block";
    arrowIcons2[1].style.display = carousel2.scrollLeft == scrollWidth2 ? "none" : "block";
}

arrowIcons2.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth2 = firstImg2.clientWidth; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel2.scrollLeft += icon.id == "left" ? -firstImgWidth2 : firstImgWidth2;
        setTimeout(() => showHideIcons2(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide2 = () => {
    // if there is no image left to scroll then return from here
    if(carousel2.scrollLeft - (carousel2.scrollWidth - carousel2.clientWidth) > -1 || carousel2.scrollLeft <= 0) return;

    positionDiff2 = Math.abs(positionDiff2); // making positionDiff value to positive
    let firstImgWidth2 = firstImg2.clientWidth;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference2 = firstImgWidth2 - positionDiff2;

    if(carousel2.scrollLeft > prevScrollLeft2) { // if user is scrolling to the right
        return carousel2.scrollLeft += positionDiff2 > firstImgWidth2 / 3 ? valDifference2 : -positionDiff2;
    }
    // if user is scrolling to the left
    carousel2.scrollLeft -= positionDiff2 > firstImgWidth2 / 3 ? valDifference2 : -positionDiff2;
}

const dragStart2 = (e) => {
    // updatating global variables value on mouse down event
    isDragStart2 = true;
    prevPageX2 = e.pageX || e.touches[0].pageX;
    prevScrollLeft2 = carousel2.scrollLeft;
}

const dragging2 = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart2) return;
    e.preventDefault();
    isDragging2 = true;
    carousel2.classList.add("dragging");
    positionDiff2 = (e.pageX || e.touches[0].pageX) - prevPageX2;
    carousel2.scrollLeft = prevScrollLeft2 - positionDiff2;
    showHideIcons2();
}

const dragStop2 = () => {
    isDragStart2 = false;
    carousel2.classList.remove("dragging");

    if(!isDragging2) return;
    isDragging2 = false;
    autoSlide2();
}

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("touchstart", dragStart2);

document.addEventListener("mousemove", dragging2);
carousel2.addEventListener("touchmove", dragging2);

document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("touchend", dragStop2);

//-----------------------------------------------------------------------------------------------//

const carousel3 = document.querySelector(".carousel3"),
firstImg3 = carousel.querySelectorAll("img")[0],
arrowIcons3 = document.querySelectorAll(".wrapper3 i");

let isDragStart3 = false, isDragging3 = false, prevPageX3, prevScrollLeft3, positionDiff3;

const showHideIcons3 = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth3 = carousel3.scrollWidth - carousel3.clientWidth; // getting max scrollable width
    arrowIcons3[0].style.display = carousel3.scrollLeft == 0 ? "none" : "block";
    arrowIcons3[1].style.display = carousel3.scrollLeft == scrollWidth3 ? "none" : "block";
}

arrowIcons3.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth3 = firstImg3.clientWidth; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel3.scrollLeft += icon.id == "left" ? -firstImgWidth3 : firstImgWidth3;
        setTimeout(() => showHideIcons3(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide3 = () => {
    // if there is no image left to scroll then return from here
    if(carousel3.scrollLeft - (carousel3.scrollWidth - carousel3.clientWidth) > -1 || carousel3.scrollLeft <= 0) return;

    positionDiff3 = Math.abs(positionDiff3); // making positionDiff value to positive
    let firstImgWidth3 = firstImg3.clientWidth;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference3 = firstImgWidth3 - positionDiff3;

    if(carousel2.scrollLeft > prevScrollLeft2) { // if user is scrolling to the right
        return carousel3.scrollLeft += positionDiff3 > firstImgWidth3 / 3 ? valDifference3 : -positionDiff3;
    }
    // if user is scrolling to the left
    carousel3.scrollLeft -= positionDiff3 > firstImgWidth3 / 3 ? valDifference3 : -positionDiff3;
}

const dragStart3 = (e) => {
    // updatating global variables value on mouse down event
    isDragStart3 = true;
    prevPageX3 = e.pageX || e.touches[0].pageX;
    prevScrollLeft3 = carousel3.scrollLeft;
}

const dragging3 = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart3) return;
    e.preventDefault();
    isDragging3 = true;
    carousel3.classList.add("dragging");
    positionDiff3 = (e.pageX || e.touches[0].pageX) - prevPageX3;
    carousel3.scrollLeft = prevScrollLeft3 - positionDiff3;
    showHideIcons3();
}

const dragStop3 = () => {
    isDragStart3 = false;
    carousel2.classList.remove("dragging");

    if(!isDragging3) return;
    isDragging3 = false;
    autoSlide3();
}

carousel3.addEventListener("mousedown", dragStart3);
carousel3.addEventListener("touchstart", dragStart3);

document.addEventListener("mousemove", dragging3);
carousel3.addEventListener("touchmove", dragging3);

document.addEventListener("mouseup", dragStop3);
carousel3.addEventListener("touchend", dragStop3);

//-----------------------------------------------------------------------------------------------//

const carousel4 = document.querySelector(".carousel4"),
firstImg4 = carousel.querySelectorAll("img")[0],
arrowIcons4 = document.querySelectorAll(".wrapper4 i");

let isDragStart4 = false, isDragging4 = false, prevPageX4, prevScrollLeft4, positionDiff4;

const showHideIcons4 = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth4 = carousel4.scrollWidth - carousel4.clientWidth; // getting max scrollable width
    arrowIcons4[0].style.display = carousel4.scrollLeft == 0 ? "none" : "block";
    arrowIcons4[1].style.display = carousel4.scrollLeft == scrollWidth4 ? "none" : "block";
}

arrowIcons4.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth4 = firstImg4.clientWidth; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel4.scrollLeft += icon.id == "left" ? -firstImgWidth4 : firstImgWidth4;
        setTimeout(() => showHideIcons4(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide4 = () => {
    // if there is no image left to scroll then return from here
    if(carousel4.scrollLeft - (carousel4.scrollWidth - carousel4.clientWidth) > -1 || carousel4.scrollLeft <= 0) return;

    positionDiff4 = Math.abs(positionDiff4); // making positionDiff value to positive
    let firstImgWidth4 = firstImg4.clientWidth;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference4 = firstImgWidth4 - positionDiff4;

    if(carousel4.scrollLeft > prevScrollLeft4) { // if user is scrolling to the right
        return carousel4.scrollLeft += positionDiff4 > firstImgWidth4 / 3 ? valDifference4 : -positionDiff4;
    }
    // if user is scrolling to the left
    carousel4.scrollLeft -= positionDiff4 > firstImgWidth4 / 3 ? valDifference4 : -positionDiff4;
}

const dragStart4 = (e) => {
    // updatating global variables value on mouse down event
    isDragStart4 = true;
    prevPageX4 = e.pageX || e.touches[0].pageX;
    prevScrollLeft4 = carousel4.scrollLeft;
}

const dragging4 = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart4) return;
    e.preventDefault();
    isDragging4 = true;
    carousel4.classList.add("dragging");
    positionDiff4 = (e.pageX || e.touches[0].pageX) - prevPageX4;
    carousel4.scrollLeft = prevScrollLeft4 - positionDiff4;
    showHideIcons4();
}

const dragStop4 = () => {
    isDragStart4 = false;
    carousel4.classList.remove("dragging");

    if(!isDragging4) return;
    isDragging4 = false;
    autoSlide4();
}

carousel4.addEventListener("mousedown", dragStart4);
carousel4.addEventListener("touchstart", dragStart4);

document.addEventListener("mousemove", dragging4);
carousel4.addEventListener("touchmove", dragging4);

document.addEventListener("mouseup", dragStop4);
carousel4.addEventListener("touchend", dragStop4);

// code written by Anouar El Kihal (eabug) 

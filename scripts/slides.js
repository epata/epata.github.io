//slider mechanism as an implementation of javascript in manipulating DOM
var slideIdx;
slideIdx = 0;
sliderMechanism(slideIdx);

function ongoingSlide(n) {
    sliderMechanism(slideIdx = n);
}

function switchSlides(n) {
    sliderMechanism(slideIdx= slideIdx + n);
}

function sliderMechanism(n) {
    var slides = document.getElementsByClassName("slider");
    var bullets = document.getElementsByClassName("bullet");
    var slLength = slides.length;
    var bulLength = bullets.length;
    if (n > slLength-1) {
        slideIdx = 0
    } else if (n < 0) {
        slideIdx = slLength-1
    }
    for (let i = 0; i < slLength; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < bulLength; i++) {
        bullets[i].className = bullets[i].className.replace(" active", "");
    }
    slides[slideIdx].style.display = "block";  
    bullets[slideIdx].className += " active";
}

sliderMechanism2(slideIdx);

function ongoingSlide2(n) {
    sliderMechanism2(slideIdx = n);
}

function switchSlides2(n) {
    sliderMechanism2(slideIdx= slideIdx + n);
}

function sliderMechanism2(n) {
    var slides = document.getElementsByClassName("slider2");
    var bullets = document.getElementsByClassName("bullet2");
    var slLength = slides.length;
    var bulLength = bullets.length;
    if (n > slLength-1) {
        slideIdx = 0
    } else if (n < 0) {
        slideIdx = slLength-1
    }
    for (let i = 0; i < slLength; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < bulLength; i++) {
        bullets[i].className = bullets[i].className.replace(" active", "");
    }
    slides[slideIdx].style.display = "block";  
    bullets[slideIdx].className += " active";
}
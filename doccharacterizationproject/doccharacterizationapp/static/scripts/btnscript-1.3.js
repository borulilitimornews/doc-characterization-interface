//News SlideShow
var slideIndexNews = 0;
showSlidesNews();

function showSlidesNews() {
    var i;
    var slides = document.getElementsByClassName("homeSlideShow");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexNews++;
    if (slideIndexNews > slides.length) { slideIndexNews = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexNews - 1].style.display = "block";
    dots[slideIndexNews - 1].className += " active";
    setTimeout(showSlidesNews, 8000); // Change image every 8 seconds
}


//Banner Slide 300x600
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("300x600Banner");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 7000); // Change image every 7 seconds
}

//Banner Slide 728x90
var slideSmallIndex = 0;
showSmallSlides();

function showSmallSlides() {
    var i;
    var slides = document.getElementsByClassName("home728x90Banner");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideSmallIndex++;
    if (slideSmallIndex > slides.length) { slideSmallIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideSmallIndex - 1].style.display = "block";
    dots[slideSmallIndex - 1].className += " active";
    setTimeout(slideSmallIndex, 7000); // Change image every 7 seconds
}

//Search Button
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

// Video Pop-up
var video = document.getElementById("myVideo");

function myFunction() {
    video.play();
}

//Scroll to top Sign Button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
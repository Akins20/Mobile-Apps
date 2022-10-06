var slideIndex = 1;
showSlides(slideIndex);
    
function plusSlides(n) {
    showSlides(slideIndex += n);
}
    
function currentSlide(n) {
    showSlides(slideIndex = n);
}
    
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
var i = 1;
function lod() {
    if (i == 0) {
    i = 1;
    var elem = document.getElementById('mySkill');
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 100) {
        clearInterval(id);
        i = 0;
        } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        }
      }
    }
}
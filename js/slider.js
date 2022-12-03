//! slider start
let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
  showSlides((slideIndex += 1));
}, 4000);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slider-item"); // HTML Collection olur ise forEach kullanamayız..
  // Array.from(document.getElementsByClassName("slider-item")); // Array
  //  [...document.getElementsByClassName("slider-item")]; // Array
  const dots = document.getElementsByClassName("slider-dot");

  // for (let i = 0; i < slides.length; i++) {
  //   console.log(slides[i]);
  // };

  // Array.from(slides).forEach((slide) => {
  //   console.log(slide);
  // });

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

//! slider end

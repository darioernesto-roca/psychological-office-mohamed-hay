// Programming the hamburguer button and the nav

const hamburgerBtn = document.querySelector(".hamburger");
const navContainer = document.querySelector('.main-header__nav-container');
const navElement = document.querySelector('.main-header__nav ')

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle("is-active");
    navContainer.classList.toggle('active');
})


// Programming the buttons

    // Obtenemos todos los elementos button con la clase especificada
    const buttons = document.getElementsByClassName("main__btn-container__btn-reserve");

    // Iteramos a través de cada botón
    for (let i = 0; i < buttons.length; i++) {
        // Añadimos un evento click a cada botón
        buttons[i].addEventListener("click", function() {
            // Redirigimos al ID especificado
            location.href = "#contact";
        });
    }


// Programming the slider

const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider__arrow_prev');
const nextBtn = document.querySelector('.slider__arrow_next');
const testimonios = slider.querySelectorAll('.slider__item');
let currentIndex = 0;

function showTestimonio(index) {
  testimonios.forEach(testimonio => testimonio.classList.remove('slider-active'));
  testimonios[index].classList.add('slider-active');
}


function showNextTestimonio() {
  currentIndex++;
  if (currentIndex >= testimonios.length) {
    currentIndex = 0;
  }
  showTestimonio(currentIndex);
}

function showPrevTestimonio() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = testimonios.length - 1;
  }
  showTestimonio(currentIndex);
}

prevBtn.addEventListener('click', showPrevTestimonio);
nextBtn.addEventListener('click', showNextTestimonio);

showTestimonio(currentIndex);



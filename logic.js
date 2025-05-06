let screen = 1;
displayHero(screen);

function nextScreen() {
    screen++;
    displayHero(screen);
}

function prevScreen() {
    screen--;
    displayHero(screen);
}

function setScreen(n) {
    screen = n;
    displayHero(screen);
}

function displayHero(n) {
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        screen = 1;
    }
    if (n < 1) {
        screen = slides.length;
    }
    for (i = 0; i < slides.length; ++i){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; ++i){
        dots[i].className.replace(" active", "")
    }
    slides[screen - 1].style.display = "block";
    dots[screen - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.more');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest('.card');
        const info = card.querySelector('.info');
        if (info) {
          info.style.display = (info.style.display === 'flex') ? 'none' : 'flex';
        }
      });
    });
  });
  
  addToggleEventListenerToMoreButtons();
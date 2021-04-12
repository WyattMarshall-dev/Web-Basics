

const current = document.querySelector('#current');
const lightbox = document.querySelector('.lightbox');
const imgs = document.querySelectorAll('.imgs img')

//imgs[0].style.opacity = 0.4

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', imgClick);
}

function imgClick(e) {
  for (let i = 0; i < imgs.length; i++){
    imgs[i].style.opacity = 1;
  }

  current.classList.add('fade-in');
  setTimeout(() => current.classList.remove('fade-in'), 500);

  lightbox.style.visibility = 'visible';

  current.src = e.target.src;
  //e.target.style.opacity = 0.4;
}

lightbox.addEventListener('click', clickOff);

function clickOff() {
  lightbox.style.visibility = 'hidden';
}

// ================================================


function scrollAppear() {
  const introText = document.querySelector('.intro-text');
  let introPosition = introText.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.1;

  if(introPosition < screenPosition) {
    introText.classList.add('intro-appear');
  }

}

window.addEventListener('scroll', scrollAppear);


// ================================================

const texts = ['WELCOME'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

  if(count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;

  if(letter.length === currentText.length) {
    count++;
    index = 0;
  }

  let timer = setTimeout(type, 350);

  if (count == texts.length) {
    clearTimeout(timer);
  }

}());

const active = document.querySelector('#select');
const item = document.querySelectorAll('input');

item.forEach(item => item.addEventListener('change', () => {
  active.classList.add('active');
}));

const buttonClose = document.querySelector('.close-button');

buttonClose.addEventListener('click', () => active.classList.remove('active'));

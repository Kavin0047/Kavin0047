// script.js
const envelope = document.querySelector('.envelope');
const birthdayWish = document.createElement('div');
birthdayWish.classList.add('birthday-wish');
birthdayWish.innerHTML = 'Happy Birthday, Appa!';

envelope.addEventListener('click', () => {
    envelope.appendChild(birthdayWish);
    birthdayWish.style.animationPlayState = 'running';
});
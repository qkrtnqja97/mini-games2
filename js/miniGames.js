
const wrap = document.querySelector('.img-wrap');
const miniGames = document.querySelector('#mini-games');
let figures = document.querySelector('#mini-games figure');
let prev = document.querySelector('.prev');
const next = document.querySelector('.next')

window.addEventListener('DOMContentLoaded', () => {
    let cloneCopy1 = document.getElementById('games-img').cloneNode(true);
    miniGames.appendChild(cloneCopy1);
    let cloneCopy2 = document.getElementById('rock-img').cloneNode(true);
    miniGames.insertBefore(cloneCopy2, figures);
    let cloneCopy3 = document.getElementById('hangman-img').cloneNode(true);
    miniGames.insertBefore(cloneCopy3, figures);
});

prev.addEventListener('click', () => {
    prev.disabled = true;
    miniGames.appendChild(document.querySelector('#mini-games figure:first-child'));
    wrap.classList.add('left');
    setTimeout(() => {
        wrap.classList.remove('left');
        prev.disabled = false;
    }, 1000);
});

next.addEventListener('click', () => {
    next.disabled = true;
    miniGames.insertBefore(document.querySelector('#mini-games figure:last-child'), document.querySelector('#mini-games figure'));
    wrap.classList.add('right');
    setTimeout(() => {
        wrap.classList.remove('right');
        next.disabled = false;
    }, 1000);
});
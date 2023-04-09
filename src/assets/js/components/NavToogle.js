let toogle = document.querySelector('.nav-toggle');
let navigation = document.querySelector('.navigation');
let icons = document.querySelector('.icons');
let button = document.querySelector('.button');


toogle.addEventListener('click', function (event) {
    event.preventDefault();


    event.currentTarget.classList.toggle('active');
    navigation.classList.toggle('active');
    icons.classList.toggle('active');
    button.classList.toggle('active');
})

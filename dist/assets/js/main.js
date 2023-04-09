const swiper = new Swiper('.swiper', {


    // Optional parameters
    //  direction: 'horisontal',
    loop: true,



    //   If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },




});
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
let form = document.querySelector('.form')
let email = document.querySelector('.email')
let name = document.querySelector('.name')
let message = document.querySelector('.message')
let btn = document.querySelector('.button--send')

form.addEventListener('submit', function (event) {

    event.preventDefault()

    console.log('name: ' + event.srcElement[0].value)
    console.log('email: ' + event.srcElement[1].value)
    console.log('message:' + event.srcElement[2].value)

    event.srcElement[0].value = ''
    event.srcElement[1].value = ''
    event.srcElement[2].value = ''


})



function toogleRedBorder(elem) {
    if (elem.value === '') {
        elem.classList.add('notValide');
    } else {
        elem.classList.remove('notValide');
    }
}


btn.addEventListener('click', function () {
    toogleRedBorder(name)
    toogleRedBorder(email)
    toogleRedBorder(message)
})

let inputsArr = [name, email, message]


inputsArr.forEach((item) => {
    item.addEventListener('input', function (e) {
        e.currentTarget.classList.remove('notValide');
    })
})


function validateEmail(input) {
    if (!input.value.match(/\S+@[a-z]+.[a-z]+/)) {
        input.setCustomValidity("Адрес электронной почты должен быть таким: mailname@servername.domen");
    } else {
        input.setCustomValidity("");
    }
}


email.addEventListener('input', function () {
    validateEmail(this)
})
let main = document.querySelector('.main')
let arrowImg = document.querySelector('.arrow__img')

arrowImg.hidden = true;


main.addEventListener('mouseenter', function () {
    arrowImg.hidden = false;
})


main.addEventListener('mouseleave', function () {
    arrowImg.hidden = true;
})
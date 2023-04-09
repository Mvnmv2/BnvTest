let main = document.querySelector('.main')
let arrowImg = document.querySelector('.arrow__img')

arrowImg.hidden = true;


main.addEventListener('mouseenter', function () {
    arrowImg.hidden = false;
})


main.addEventListener('mouseleave', function () {
    arrowImg.hidden = true;
})

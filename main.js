const showButton = document.querySelector('.show-more__button');
const hiddenParts = document.querySelector('.list__hidden');
const showLess = document.querySelector('.show-more__icon');

let div1 = document.createElement('div');
let div2 = document.createElement('div');
div1.setAttribute('class', 'swiper-slide card');
div2.setAttribute('class', 'swiper-slide card');
showButton.addEventListener('click', function() {
    hiddenParts.classList.toggle('list__hidden');
    showLess.classList.toggle('show-more__icon');
    div1.innerHTML = `
        <img class="card__logo" src="./img/samsung.svg" alt="Samsung">
        <img src="./img/go.svg" alt="logo" class="card__go">
        `
        div2.innerHTML = `
        <img class="card__logo" src="./img/ViewSonic.svg" alt="ViewSonic">
        <img src="./img/go.svg" alt="logo" class="card__go">
        `
    document.getElementById('slide').appendChild(div1);
    document.getElementById('slide').appendChild(div2);
    if(hiddenParts.classList.contains('list__hidden')) {
        showButton.textContent = 'Показать всё';
    } else {
        showButton.textContent = 'Скрыть';
    }
});

const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
        mySwiper =  new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 16,
            width: 240,
            height: 72,
            slideClass: 'card',
        pagination: {   
            spaceBetween: 16,
            loop: true,
            el: ".swiper-pagination",
            clickable: true,
        },
    });
        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth >= 768) {
        slider.dataset.mobile = 'false';
            mySwiper.destroy();

    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
})
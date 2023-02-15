const showButton = document.querySelector('.show-more__button');
const showLess = document.querySelector('.show-more__icon');
const showMore = document.querySelector('.show-more');
const itemsCount = document.querySelectorAll('.card').length;
const cards = document.querySelectorAll('.swiper-wrapper > .card');
const wrap = document.querySelector('.swiper-wrapper');
const slider = document.querySelector('.swiper');


let htmlCard = document.createElement('div');

showMore.addEventListener('click', () => {
    showLess.classList.toggle('show-more__icon');
    showButton.className+='hide-btn';
    slider.classList.toggle('go-down');
    const arr = Array.from(document.querySelectorAll('.swiper-wrapper > .card'));
    arr.forEach(el => el.classList.toggle('is-visiable'));

    if(showButton.classList.contains('hide-btn')){
        showButton.textContent = 'Скрыть';
    } else {
        showButton.textContent = 'Показать всё';
    }
})
if(window.innerWidth >= 768){
    console.log('h')
    htmlCard.className = 'last-card hidden-el card card--position hide-card';
    htmlCard.innerHTML = '<img src="./img/apple.svg" alt="logo" class="card__logo"><img src="./img/go.svg" alt="logo" class="card__go">'
    wrap.appendChild(htmlCard);
    for(let i = 6; i < cards.length; i++){
        cards[i].classList.add('hide-card');
    }

}

let mySwiper;
function mobileSlide(){
    if(window.innerWidth <= 767 && slider.dataset.mobile == 'false'){
        mySwiper =  new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 16,
                width: 240,
                height: 72,
            pagination: {   
                spaceBetween: 16,
                loop: true,
                el: ".swiper-pagination",
                clickable: true,
            },
        });
        slider.dataset.mobile = 'true';
    }
    if(window.innerWidth >= 768 ){
        slider.dataset.mobile = 'false';
        mySwiper.destroy();
    }
}

mobileSlide();

window.addEventListener('resize', () => {
    mobileSlide();
})
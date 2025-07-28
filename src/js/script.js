window.onload = function() {
    // Ваш скрипт



// slider


const swiper = new Swiper(".swiper-front", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});



//прокрутка преимуществ
const initSlider = () => {
    const DEFAULT_SPEED = 1;

    const slider = document.querySelector(".slider");
    if (!slider) return;

    const wrapper = document.querySelector(".slider-track");

    // Сохраняем оригинальное содержимое и его ширину
    const originalContent = wrapper.innerHTML;
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth + 64; // ширина слайда + margin
    const originalWidth = slideWidth * slides.length;

    // Дублируем слайды
    wrapper.innerHTML += originalContent;

    let speed = DEFAULT_SPEED;
    let position = 0;
    let animationId;
    let lastTime = 0;

    slider.addEventListener("mouseenter", () => {
        speed = DEFAULT_SPEED - 1;
    });

    slider.addEventListener("mouseleave", () => {
        speed = DEFAULT_SPEED;
    });

    function animate(timestamp) {
        if (!lastTime) lastTime = timestamp;
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        // Плавное перемещение с учетом времени кадра
        position -= speed * (deltaTime / 16);

        // Рассчитываем половину ширины дублированного контента
        const resetPosition = originalWidth;

        // Плавный сброс позиции при достижении конца
        if (position <= -resetPosition) {
            position += resetPosition;
        }

        wrapper.style.transform = `translateX(${position}px)`;
        animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
}

initSlider();

// slider portfolio

const swiper2 = new Swiper(".portfolio_slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    spaceBetween: 50,
    centeredSlides: true,
    centeredSlidesBounds: true,

    // If we need pagination
   pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        },
    },

});


//анимации
    AOS.init();



    //логотипы клиентов на главной

    const logos = document.querySelector('.clients_right')
    if(logos) {

        for (let i = 1; i < 19; i++) {
            let newEl = document.createElement('div')
            newEl.classList.add('clients_right_item')
            newEl.setAttribute('data-aos', 'zoom-in')
            newEl.setAttribute('data-aos-delay', getRandomInt(1, 10) * 100)
            newEl.innerHTML = `
            <img src="src/img/logos/l${i}.png" alt="">
            `
            logos.insertAdjacentElement('beforeend', newEl)
        }

    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



    //constructor

    const constuctor = document.querySelector('.constructor')
    const popup = document.querySelector('.popup')
    const popupTitle = document.querySelector('.popup-title')
    const faqPopup = document.querySelector('.faq-popup')

    document.body.addEventListener('click', e => {

        /*constructor*/
        if(e.target.classList.contains('constructor-js')) {
            constuctor.style.display = 'block'
        }
        if(e.target.classList.contains('cross-close')) {
            constuctor.style.display = 'none'
        }

        /*popup*/
        if(e.target.classList.contains('call-js')) {
            popup.style.display = 'flex'
            popupTitle.innerHTML = 'Закажите обратный звонок'
        }
        if(e.target.classList.contains('request-js')) {
            popup.style.display = 'flex'
            popupTitle.innerHTML = 'Оставьте заявку'
        }
        if(e.target.classList.contains('close-popup')) {
            popup.style.display = 'none'
        }

        /*faq-popup*/

        if(e.target.classList.contains('faq-popup-js')) {
            e.preventDefault()
            faqPopup.style.display = 'flex'
        }

        if(e.target.classList.contains('faq-cross')) {
            faqPopup.style.display = 'none'
        }



    })


    /*действия внутри конструктора*/
    const constructorForm = document.querySelector('.constructor_form')
    const mainImage = document.querySelector('.constructor_center_img')
    const colorSelect = document.querySelector('.color_select')

    if(constructorForm) {
        constructorForm.addEventListener('click', e => {
            if(e.target.id === 'left-wall') {
                e.target.checked ? mainImage.classList.add('left') : mainImage.classList.remove('left')
            }
            if(e.target.id === 'right-wall') {
                e.target.checked ? mainImage.classList.add('right') : mainImage.classList.remove('right')
            }
            if(e.target.id === 'back-wall') {
                e.target.checked ? mainImage.classList.add('back') : mainImage.classList.remove('back')
            }

            //выбор цвета
            if(colorSelect) {
                colorSelect.addEventListener('click', e => {

                    let inputs = colorSelect.querySelectorAll('input')
                    inputs.forEach(item => {
                        item.classList.remove('active')
                        item.checked = !item.checked
                    })
                    e.target.classList.add('active')
                    console.log(mainImage)
                    console.log(e.target.id)
                    mainImage.style.backgroundImage = `url("src/img/constructor/${e.target.id}.png")`
                })
            }

            /* +- */

            const ranges = document.querySelectorAll('.input_range')
            console.log(ranges)
            ranges.forEach( item => {
                item.addEventListener('input', e => {
                    if(e.target.tagName === 'INPUT'){
                        item.querySelector('.current-range').innerHTML = e.target.value
                    }
                })
            })





        })
    }
    /*действия внутри конструктора*/


    /* мобильное меню */
    const burger = document.querySelector('.burger')
    const mainNavigation = document.querySelector('.main-navigation')
    const mobileBlock = document.querySelector('.mobile-block')
    if(burger){
        burger.addEventListener('click', e => {
            burger.classList.toggle('active')
            mainNavigation.classList.toggle('active')
            mobileBlock.classList.toggle('active')
        })
    }





























//end of scripts
};








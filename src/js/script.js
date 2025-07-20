// slider

/*
const swiper = new Swiper(".swiper", {
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
*/


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

const portfolio_slider = new Swiper(".portfolio_slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    spaceBetween: 50,
    centeredSlides: true,
    centeredSlidesBounds: true,

    // If we need pagination
   /* pagination: {
        el: ".swiper-pagination",
    },*/

});




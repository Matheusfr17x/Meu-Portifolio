const swiper = new Swiper('.swiper', {
    slidesPerView: 4,  // Exibe 4 cards por vez
    spaceBetween: 30,  // Espaço entre os cards
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // Para telas menores
        600: {
            slidesPerView: 1,
        },
        // Para telas médias
        900: {
            slidesPerView: 2,
        },
        // Para telas grandes
        1200: {
            slidesPerView: 4,  // Exibe 4 cards em telas grandes
        },
    },
});
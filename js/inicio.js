// Asegura que se ejecute cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
});

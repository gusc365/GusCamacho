document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.categorias-fotos', { delay: 400 });
ScrollReveal().reveal('.cards-banner-one', { delay: 400 });
ScrollReveal().reveal('.cards-banner-two', { delay: 400 });

document.querySelector('.nav-main .nav-menu').addEventListener('click', () => {
    console.log('saaaaaaa')
});
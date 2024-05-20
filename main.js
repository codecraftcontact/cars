document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
        navMenu.classList.remove('show-menu');
    }

    navLink.forEach(n => n.addEventListener('click', linkAction));

    function scrollHeader() {
        const header = document.getElementById('header');
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }

    window.addEventListener('scroll', scrollHeader);

    let testimonialSwiper = new Swiper(".testimonial-swiper", {
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    let newSwiper = new Swiper(".new-swiper", {
        loop: true,
        spaceBetween: 24,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');
            const navItem = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItem.classList.add('active-link');
            } else {
                navItem.classList.remove('active-link');
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');
        if (window.scrollY >= 350) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    }

    window.addEventListener('scroll', scrollUp);

    const cart = document.getElementById('cart');
    const cartShop = document.getElementById('cart-shop');
    const cartClose = document.getElementById('cart-close');

    if (cartShop) {
        cartShop.addEventListener('click', () => {
            cart.classList.add('show-cart');
        });
    }

    if (cartClose) {
        cartClose.addEventListener('click', () => {
            cart.classList.remove('show-cart');
        });
    }

    let mixerFeatured = mixitup('.featured__content', {
        selectors: {
            target: '.featured__card'
        },
        animation: {
            duration: 300
        }
    });

    const linkFeatured = document.querySelectorAll('.featured__item');

    function activeFeatured() {
        linkFeatured.forEach(l => l.classList.remove('active-featured'));
        this.classList.add('active-featured');
    }

    linkFeatured.forEach(l => l.addEventListener('click', activeFeatured));
});

window.addEventListener('load', () => {
  document.querySelector('.header').classList.add('is-visible');
});

const burger = document.querySelector('.header-burger-button');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.menu-overlay');

if (burger && mobileMenu && overlay) {

    burger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    overlay.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

}

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach((el) => {
    observer.observe(el);
});

const header = document.querySelector('.header');
const darkSections = document.querySelectorAll('.foto-section, .footer-section');

function checkHeaderPosition() {
    let isDark = false;

    const headerBottom = header.getBoundingClientRect().bottom;

    darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (headerBottom >= rect.top && headerBottom <= rect.bottom) {
            isDark = true;
        }
    });

    if (isDark) {
        header.classList.add('light');
    } else {
        header.classList.remove('light');
    }
}

window.addEventListener('scroll', checkHeaderPosition);
window.addEventListener('load', checkHeaderPosition);
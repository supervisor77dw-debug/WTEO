import './style.css'

document.addEventListener('DOMContentLoaded', () => {

    // --- Sticky Header Effect ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            // Simple icon toggle animation can be added here
            menuToggle.classList.toggle('active');
        });
    }

    // --- Fade In Animation Helper ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-in-section');
    elementsToAnimate.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    // এখানে DOM লোড হওয়ার পর কোনো জাভাস্ক্রিপ্ট কোড লিখতে পারো।
    // যেমন:
    const learnMoreBtn = document.querySelector('.hero-content .primary-btn');
    learnMoreBtn.addEventListener('click', () => {
        alert('Learning more!');
    });

    console.log('Landing page loaded!');
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#0c0c0c'; // স্ক্রল করলে হালকা ব্যাকগ্রাউন্ড
        navbar.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
    } else {
        navbar.style.backgroundColor = '#0c0c0c'; // উপরে থাকলে সাদা
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');

        // Change icon
        const icon = header.querySelector('.icon');
        icon.textContent = item.classList.contains('active') ? '×' : '+';
    });
});